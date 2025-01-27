// middleware/auth.js
const jwt = require('jsonwebtoken');
const secretKey = 'secret-123'; // same as in the previous code

const verifyToken =async (req, res, next) => {
  const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No token provided' });
  }

  try {
    const verified = jwt.verify(token, secretKey);
    req.user = verified;
    req.email = verified; // store the verified user data in the req object
    next(); // call the next middleware
  } catch (err) {
    return res.status(400).json({ message: 'Invalid Token' });
  }
};

module.exports = verifyToken;
