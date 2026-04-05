const prisma = require("../config/prisma");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



exports.login = async (req, res) => {
    try {
        const {email, password} = req.body;

        // check if user exists
        const admin = await prisma.admin.findUnique({
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
        const token = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        // send response
        res.json({
            message: "Login successful", 
            token 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server error"});
        
    }
            // console.log("Body:", req.body);

}
