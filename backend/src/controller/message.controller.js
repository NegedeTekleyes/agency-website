

const prisma = require('../config/prisma');

// create message from frontend
exports.createMessage = async (req,res) => {
    try {
        const {name, email, subject, message} = req.body;
        // validation
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const newMessage = await prisma.message.create({
            data: {
                name,
                email,
                subject,
                message
            }
        })
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// get all messages
exports.getMessages = async (req, res) => {
    const messages = await prisma.message.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });
    res.status(200).json(messages);
}

// reply to message from frontend
exports.replyMessage = async (req,res) => {
    const {id} = req.params;
    const {reply} = req.body;

    if (!reply) {
        return res.status(400).json({ error: "Reply content is required" });
    }
    const updated = await prisma.message.update({
        where: {id: Number(id)},
        data: {
            reply,
            isReplied: true,
            status: 'replied',
            repliedAt: new Date()
        }
    })
    res.status(200).json(updated);
}

