const User = require('../models/User');

// Function to get user profile
const getUserProfile = async (req, res) => {
  try {
    // Get user ID from request parameters
    const { userId } = req.params;

    // Find user by ID
    const user = await User.findById(userId);

    // If user not found, return error
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return user profile
    res.status(200).json({ user });
  } catch (error) {
    console.error('Error getting user profile:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getUserProfile };
