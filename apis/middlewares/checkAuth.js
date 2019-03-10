import jwt from 'jsonwebtoken';
import key from '../config/keys';


const JWT = {};

JWT.verifyToken = (req, res, next) => {
  const authToken = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.Authorization || req.headers.authorization;
  if (authToken) {
    const token = authToken.split(' ')[1];
    if (!token) {
      return res.status(403).json({ msg: 'No token provided' });
    }
    jwt.verify(token, key.secretOrKey, (error, decoded) => {
      if (error) {
        return res.status(401, error.message);
      }
      req.decodedToken = decoded;
      next();
    });
  } else {
    return res.status(401).json({ error: 'Token not provided' });
  }
};

module.exports = JWT;
