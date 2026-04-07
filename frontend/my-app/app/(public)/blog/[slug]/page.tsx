"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogDetail() {
  const params = useParams();
  const slug  = params.slug as string;

  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `http://localhost:5000/api/posts/${slug}`
        );

        const data = await res.json();

        if (!res.ok) {
          console.error(data.error);
          setPost(null);
        } else {
          setPost(data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        setPost(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) return <div className="p-10">Loading...</div>;

  if (!post) return <div className="p-10">Post not found</div>;

  return (
    <section className="min-h-screen bg-gray-50 text-black py-24 px-6 md:px-16">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
        
        <p className="text-gray-500 mb-2">
          {new Date(post.createdAt).toDateString()}
        </p>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        <p className="text-gray-700 leading-8 text-lg whitespace-pre-line">
          {post.content}
        </p>

      </div>
    </section>
  );
}