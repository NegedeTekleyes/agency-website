

const express = require('express');
const router = express.Router();
const {
  getPublicPosts,
  getPublicPostBySlug,
  createPost,
  getAdminPosts,
  updatePost,
  deletePost
} = require("../controllers/post.controller");
// Public routes (no token)
router.get("/", getPublicPosts);           // for public site
router.get("/:slug", getPublicPostBySlug); // for public detail

// Admin routes (require JWT)
router.get("/admin/posts", authenticateToken, getAdminPosts);
router.post("/admin/posts", authenticateToken, createPost);
router.put("/admin/posts/:id", authenticateToken, updatePost);
router.delete("/admin/posts/:id", authenticateToken, deletePost);

module.exports = router;