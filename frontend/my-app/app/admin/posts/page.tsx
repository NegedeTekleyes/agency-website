"use client";
import { useEffect, useState } from "react";

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
      console.error("Failed to fetch posts");
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmDelete = confirm("Delete this post?");
    if (!confirmDelete) return;

    try {
      const token = getToken();

      const res = await fetch(
        `http://localhost:5000/api/posts/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      alert("Deleted successfully");

      // refresh
      fetchPosts();
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  return (
    <div className="p-6 text-black">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Posts</h1>

        <a
          href="/admin/posts/new"
          className="px-4 py-2 bg-red-500 text-white rounded-lg"
        >
          New Post
        </a>
      </div>

      <div className="space-y-4">
        {posts.map((post: any) => (
          <div
            key={post.id}
            className="bg-white p-4 rounded-xl shadow flex justify-between items-center"
          >
            <div>
              <h2 className="font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.status}</p>
            </div>

            <div className="flex gap-3">
              <a
                href={`/admin/posts/${post.id}/edit`}
                className="text-blue-500"
              >
                Edit
              </a>

              <button
                onClick={() => handleDelete(post.id)}
                className="text-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}