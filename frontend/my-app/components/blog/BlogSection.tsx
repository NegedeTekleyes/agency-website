"use client";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
// import { posts } from "@/lib/posts";


interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  createdAt: string;
}
interface BlogSectionProps {
  initialPosts?: Post[];
}

export default function BlogSection({ initialPosts}: BlogSectionProps) {

  const [posts, setPosts] = useState<Post[]>(initialPosts || []);
  const [loading, setLoading] = useState(!initialPosts);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 6; // adjust as needed

  useEffect(() => {
    if (initialPosts) return; // if SSR provided, skip fetch

    const fetchPosts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"}/api/posts?page=${page}&limit=${postsPerPage}`
        );
        if (!res.ok) throw new Error("Failed to load posts");
        const data = await res.json();
        setPosts(data.posts || data); // adjust based on your API response structure
        setTotalPages(data.totalPages || Math.ceil(data.length / postsPerPage) || 1);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, initialPosts]);

  const handlePrev = () => setPage((p) => Math.max(1, p - 1));
  const handleNext = () => setPage((p) => Math.min(totalPages, p + 1));

  if (loading) {
    return (
      <section className="py-24 px-6 md:px-16 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto text-center">Loading articles...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 px-6 md:px-16 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto text-center text-red-500">
          Error: {error}
        </div>
      </section>
    );
  }
  return (
    <section className="py-24 px-6 md:px-16 bg-gray-50 text-black">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <p className="text-red-500 uppercase text-xl tracking-widest mb-4">
          Blog
        </p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Latest Articles
        </h2>
      </div>

      {/* Blog Grid */}
      <div className=" grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-6 mt-16 space-x-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="w-100 rounded-full sm:w-auto px-6 sm:px-10 py-3 bg-red-500 hover:bg-black transition-colors text-white text-sm sm:text-base font-medium tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="w-100 rounded-full sm:w-auto px-6 sm:px-10 py-3 bg-red-500 hover:bg-black transition-colors text-white text-sm sm:text-base font-medium tracking-wider disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
        </button>
      </div>

    </section>
  );
}
