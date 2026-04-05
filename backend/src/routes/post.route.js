

const express = require('express');
const router = express.Router();
const { createPost, getPosts } = require('../controller/post.controller');
router.post('/', createPost);
router.get('/', getPosts);
module.exports = router;