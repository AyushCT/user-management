const bcrypt = require('bcrypt');

// Function to hash password
const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return hashedPassword;
};

// Export utility function
module.exports = { hashPassword };
