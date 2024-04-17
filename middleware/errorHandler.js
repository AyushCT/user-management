// user-service/middleware/errorHandler.js

// Error handler middleware function
const errorHandler = (err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal server error' });
  };
  
  // Export middleware function
  module.exports = errorHandler;
  