import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const verifyRefreshToken = (refreshToken) => {
  
  return new Promise((resolve, reject) => {
    User.findOne({ refreshToken }, (err, doc) => {
      if (!doc)
        return reject({ error: true, message: 'Invalid refresh token' });

      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, tokenDetails) => {
          if (err)
            return reject({ error: true, message: 'Invalid refresh token' });
          resolve({
            tokenDetails,
            error: false,
            message: 'Valid refresh token',
          });
        }
      );
    });
  });
};
