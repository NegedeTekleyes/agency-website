"use client";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  const getToken = () => {
    const match = document.cookie.match(/token=([^;]+)/);
    return match ? match[1] : null;
  };

  const fetchPosts = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/posts");
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      toast.error("Failed to load posts");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  //  Optimistic Delete
  const handleDelete = async (id: number) => {
    const token = getToken();

    // remove from UI instantly
    const previousPosts = posts;
    setPosts(posts.filter((p: any) => p.id !== id));

    try {
      const res = await fetch(`http://localhost:5000/api/posts/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      toast.success("Post deleted");
    } catch (error) {
      // rollback if failed
      setPosts(previousPosts);
      toast.error("Delete failed");
    }
  };

  return (
    <div className="p-8 text-black">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Posts</h1>

        <a
          href="/admin/posts/new"
          className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-black transition"
        >
          + New Post
        </a>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
            <tr>
              <th className="text-left px-6 py-4">Title</th>
              <th className="text-left px-6 py-4">Status</th>
              <th className="text-left px-6 py-4">Date</th>
              <th className="text-right px-6 py-4">Actions</th>
            </tr>
          </thead>

          <tbody>

            {posts.length === 0 && (
              <tr>
                <td colSpan={4} className="text-center py-10 text-gray-400">
                  No posts found
                </td>
              </tr>
            )}

            {posts.map((post: any) => (
              <tr
                key={post.id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium">
                  {post.title}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded text-xs ${
                      post.status === "active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {post.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString()}
                </td>

                <td className="px-6 py-4 text-right space-x-3">
                  <a
                    href={`/admin/posts/${post.id}/edit`}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </a>

                  <button
                    onClick={() => handleDelete(post.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
}