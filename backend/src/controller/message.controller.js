

const prisma = require('../config/prisma');

// create message from frontend
exports.createMessage = async (req,res) => {
    try {
        const {name, email, subject, message} = req.body;
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
