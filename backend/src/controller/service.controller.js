

const  prisma = require('../config/prisma');

// create service from frontend
exports.createService = async (req,res) => {
    try {
        const {title, description, status} = req.body;
        const newService = await prisma.service.create({
            data: {
                title,
                description,
                status
            }
        })
        res.status(201).json(newService);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
// get all services
exports.getService = async (req, res) => {
    try {
        const services = await prisma.service.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
        });
        res.status(200).json(services)
    } catch (error) {
        
    }
}



// update service from frontend
exports.updateService = async (req,res) => {
const {id} = req.params;
const updated = await prisma.service.update({
    where: {id: Number(id)},
    data: req.body
})
res.status(200).json(updated);
}

// delete service from frontend
exports.deleteService = async (req, res) => {
    const {id} = req.params;
    
    await prisma.service.delete({
        where: {id: Number(id)}
    })
    res.status(200).json({message: 'Service deleted successfully'})
    console.log("req.params", req.params);
}