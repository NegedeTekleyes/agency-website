"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function EditPostPage() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");
  const [loading, setLoading] = useState(true);

  const getToken = () => {
    const match = document.cookie.match(/token=([^;]+)/);
    return match ? match[1] : null;
  };

  // 🔥 Fetch post data
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/posts/${id}`);
        const data = await res.json();

        setTitle(data.title);
        setExcerpt(data.excerpt);
        setContent(data.content);
        setStatus(data.status);
        console.log("Fetched post:", data);
      } catch (error) {
        toast.error("Failed to load post");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPost();
  }, [id]);

  // 🔥 Update post
  const handleUpdate = async () => {
    const token = getToken();

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    try {
      const res = await fetch(
        `http://localhost:5000/api/posts/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            title,
            slug,
            excerpt,
            content,
            status,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      toast.success("Post updated");

      // redirect back
      router.push("/admin/posts");

    } catch (error: any) {
      toast.error(error.message || "Update failed");
    }
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-black">

      {/* HEADER */}
      <div className="sticky top-0 bg-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Edit Post</h1>

        <div className="flex gap-3">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={handleUpdate}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            Update
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col lg:flex-row gap-6 p-6">

        {/* LEFT */}
        <div className="flex-1 bg-white p-6 rounded-xl shadow space-y-6">

          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full text-3xl font-bold outline-none"
          />

          <textarea
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            className="w-full text-gray-600 outline-none"
            rows={3}
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full min-h-[300px] outline-none"
          />
        </div>

        {/* RIGHT */}
        <div className="w-full lg:w-[300px] space-y-6">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-sm font-semibold mb-3">Status</h3>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border p-2 rounded"
            >
              <option value="draft">Draft</option>
              <option value="active">Published</option>
            </select>
          </div>

        </div>

      </div>
    </div>
  );
}