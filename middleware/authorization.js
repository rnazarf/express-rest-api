const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (typeof header === 'undefined') throw new Error('No token provided');

    const token = req.headers.authorization.split(' ')[1];

    if (!token || token === 'undefined') throw new Error('No token provided');

    const decoded = jwt.verify(token, process.env.JWT_TOKEN);

    if (!decoded) throw new Error('Invalid token');    

    req.user = decoded;
    next();

  } catch (error) {
    return res.status(403).json({
      message: error.message
    });
  }
}

module.exports = verifyToken;