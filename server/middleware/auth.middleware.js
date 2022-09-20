import jwt from 'jsonwebtoken';
import 'dotenv/config';

const auth = (req, res, next) => {
  const token = req.header['x-access-token'];
  console.log('middleware token: ',token)

  if (!token) {
    return res.status(403).send('A token is required for authentication');
  }

  try {
    const tokenDetails = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    req.user = tokenDetails;
    // console.log(req.user);
    next();
  } catch (e) {
    return res.status(401).json(e.message);
  }
};

// module.exports = auth;
export default auth;
