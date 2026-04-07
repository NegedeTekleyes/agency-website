
const authenticateToken = require("../middleware/auth.middleware");
const express = require('express');
const router = express.Router();
const {
  getPublicPosts,
  getPublicPostBySlug,
  createPost,
  getPostById,
  getAdminPosts,
  updatePost,
  deletePost
} = require("../controller/post.controller");
// Public routes (no token)
router.get("/", getPublicPosts);           // for public site
router.get("/:slug", getPublicPostBySlug); // for public detail

// Admin routes (require JWT)
router.get("/", authenticateToken, getAdminPosts);
router.get("/:id", authenticateToken, getPostById); 
router.post("/", authenticateToken, createPost);
router.put("/:id", authenticateToken, updatePost);
router.delete("/:id", authenticateToken, deletePost);

module.exports = router;