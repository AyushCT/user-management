const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define routes
router.post('/users', userController.createUser);

// Export router
module.exports = router;
