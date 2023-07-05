const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;   

function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'No token provided.' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ message: 'Invalid token.' });
    }

    req.mobileNumber = decoded.mobileNumber; 
    next();
  });
}

module.exports = verifyToken