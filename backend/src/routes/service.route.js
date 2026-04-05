

const express = require('express');
const router = express.Router();

const  {
    getService,
    createService,
    updateService,
    deleteService
} = require('../controller/service.controller');

// get all services
router.get('/', getService);
// create service
router.post('/', createService);
// update service
router.put('/:id', updateService);
// delete service
router.delete('/:id', deleteService);
module.exports = router;
