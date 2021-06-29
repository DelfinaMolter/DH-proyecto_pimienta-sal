// Modules
const express = require('express');
const router = express.Router();

// Controller access
const mainController = require('../controllers/mainController');

// Routes
router.get('/', mainController.home);
router.get('/detalle/:id', mainController.detalleMenu);

// Export
module.exports=router;  