import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const generateTokens = async (user) => {
  const userId = user._id.toString();
  try {
    const accessToken = jwt.sign(
      { id: userId, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '2h',
      }
    );
    const refreshToken = jwt.sign(
      { id: userId, email: user.email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: '1d',
      }
    );

    user.token = refreshToken;

    return Promise.resolve({ accessToken, refreshToken });
  } catch (error) {
    return Promise.reject(error);
  }
};
