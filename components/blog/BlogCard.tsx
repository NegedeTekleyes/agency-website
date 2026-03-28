import Link from "next/link";

export default function BlogCard({ post }: any) {
  return (
    <div className="border p-6 hover:shadow-lg transition">

      <p className="text-sm text-gray-500 mb-2">
        {post.date}
      </p>

      <h3 className="text-xl font-bold mb-3">
        {post.title}
      </h3>

      <p className="text-gray-600 mb-4">
        {post.excerpt}
      </p>

      <Link
        href={`/blog/${post.slug}`}
        className="text-red-500 font-semibold hover:underline"
      >
        Read More →
      </Link>

    </div>
  );
}