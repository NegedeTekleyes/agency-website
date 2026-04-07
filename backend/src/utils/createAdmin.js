
const bcrypt = require("bcryptjs");
const prisma = require("../config/prisma");
async function createAdmin() {
    const hashedPassword = await bcrypt.hash("123456", 10);
    const admin = await prisma.admin.create({
        data: {
            email: "admin@gmail.com",
            password: hashedPassword,

        }
    });
    console.log("Admin created:", admin);

}
createAdmin()
