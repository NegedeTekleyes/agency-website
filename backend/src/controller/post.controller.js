

const prisma = require('../config/prisma');

// create post from frontend
exports.createPost = async(req, res) => {
    try {
        const {title,slug,excerpt,content,status} = req.body;
        // validation
        if (!title || !slug || !excerpt || !content || !status) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const newPost = await prisma.post.create({
            data: {
                title,
                slug,
                excerpt,
                content,
                status: 'active'
            }
        })
        res.status(201).json(newPost);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get all posts
exports.getPosts = async (req, res) => {
    const posts = await prisma.post.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
    res.status(200).json(posts);
}
