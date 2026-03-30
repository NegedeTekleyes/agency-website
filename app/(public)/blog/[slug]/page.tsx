import { posts } from "@/lib/posts"

export default async function BlogDetail({ params }: any) {
  const { slug } = await params

  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    return <div>Post not found</div>
  }

  return (
    <section className="min-h-screen bg-gray-50 text-black py-24 px-6 md:px-16">
      
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
        
        <p className="text-gray-500 mb-2">{post.date}</p>

        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        <p className="text-gray-700 leading-8 text-lg">
          {post.content}
        </p>

      </div>

    </section>
  )
}