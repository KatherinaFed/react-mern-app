import jwt from 'jsonwebtoken';
import 'dotenv/config';

const auth = (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }
  
  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (e) {
    console.log(e);
    return res.status(401).json(e.message);
  }
};

// module.exports = auth;
export default auth;
