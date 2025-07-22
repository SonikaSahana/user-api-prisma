const jwt = require('jsonwebtoken');
require('dotenv').config();

const oauthAuth = (req, res, next) => {
     console.log("OAuth Middleware Triggered");
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Access token missing or invalid' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.client = decoded; 
   
    next();
  } catch (err) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
};

module.exports = oauthAuth;
