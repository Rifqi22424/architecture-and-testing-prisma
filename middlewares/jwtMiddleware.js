const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET; 

const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '60d' });
};

const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
      const token = authHeader.split(' ')[1]; 
      try {
          const decoded = verifyToken(token);
          req.userId = decoded.userId;
          next();
      } catch (error) {
          console.error(error);
          return res.status(401).json({ error: 'Invalid token' });
      }
  } else {
      return res.status(401).json({ error: 'Token not provided' });
  }
};


module.exports = { generateToken, verifyToken, authenticateToken };
