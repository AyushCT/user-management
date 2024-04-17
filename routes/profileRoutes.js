const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');

// Define routes
router.get('/:userId', profileController.getUserProfile);

// Export router
module.exports = router;
