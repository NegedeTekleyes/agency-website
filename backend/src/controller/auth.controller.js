const prisma = require("../config/prisma");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;
        // check if user exists
        const admin = await prisma.user.findUnique({
            where: {
                 email
            }
        });
        if(!admin) {
            return res.status(400).json({message: "Invalid email "});
        }
        // compare password
        const isMatch = await bcrypt.compare(password, admin.password);
        if(!isMatch) {
            return res.status(400).json({message: "Invalid password"});
        }
        // generate token
        const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        // send response
        res.json({
            message: "Login successful", 
            token 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"});
        
    }
}