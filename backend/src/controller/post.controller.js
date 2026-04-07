const prisma = require("../config/prisma");

// ========== PUBLIC (no auth needed) ==========
// Get only active posts for the public site
exports.getPublicPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      where: { status: "active" },
      orderBy: { createdAt: "desc" },
      select: { id: true, title: true, slug: true, excerpt: true, createdAt: true }
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single active post by slug (for public detail page)
exports.getPublicPostBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const post = await prisma.post.findFirst({
      where: { slug, status: "active" }
    });
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ========== ADMIN (JWT protected) ==========
// Create a post (status comes from frontend: "draft" or "active")
exports.createPost = async (req, res) => {
  try {
    const { title, slug, excerpt, content, status } = req.body;
    const authorId = req.user.id; // from auth middleware

    if (!title || !slug || !content) {
      return res.status(400).json({ error: "Title, slug and content are required" });
    }

    const newPost = await prisma.post.create({
      data: {
        title,
        slug,
        excerpt: excerpt || "",
        content,
        status: status === "active" ? "active" : "draft", 
        authorId: authorId
      }
    });
    res.status(201).json(newPost);
  } catch (error) {
    console.log("Error creating post:", error);
    res.status(500).json({ error: error.message });
  }
};

// Get all posts (including drafts) for admin dashboard
exports.getAdminPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: { author: { select: { email: true } } }
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.findUnique({
      where: { id: Number(req.params.id) }
    });
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
// Update a post
exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, slug, excerpt, content, status } = req.body;
    const post = await prisma.post.update({
      where: { id: parseInt(id) },
      data: { title, slug, excerpt, content, status }
    });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a post
exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.post.delete({ where: { id: parseInt(id) } });
    res.json({ message: "Post deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};