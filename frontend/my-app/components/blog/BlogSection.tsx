import BlogCard from "./BlogCard";
import { posts } from "@/lib/posts";
// const posts = [
//   {
//     id: 1,
//     title: "Modern Web Design Trends",
//     excerpt: "Discover the latest trends in modern web design...",
//     date: "March 20, 2026",
//     slug: "modern-web-design-trends",
//   },
//   {
//     id: 2,
//     title: "Why SEO Matters in 2026",
//     excerpt: "SEO continues to be essential for online success...",
//     date: "March 18, 2026",
//     slug: "why-seo-matters",
//   },
//   {
//     id: 3,
//     title: "Building Scalable Applications",
//     excerpt: "Learn how to build scalable web applications...",
//     date: "March 15, 2026",
//     slug: "scalable-applications",
//   },
// ];

export default function BlogSection() {
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
        <button className="w-100  rounded-full sm:w-auto px-6 sm:px-10 py-3 bg-red-500 hover:bg-black transition-colors text-white text-sm sm:text-base font-medium tracking-wider rounded-md">Prev</button>
        <button className="w-100  rounded-full sm:w-auto px-6 sm:px-10 py-3 bg-red-500 hover:bg-black transition-colors text-white text-sm sm:text-base font-medium tracking-wider rounded-md">Next</button>
      </div>

    </section>
  );
}