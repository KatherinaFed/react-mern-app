import jwt from 'jsonwebtoken';

export const generateTokens = async (user) => {
  const userId = user._id.toString();
  try {
    const accessToken = jwt.sign(
      { id: userId, email: user.email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRES_TIME,
      }
    );
    const refreshToken = jwt.sign(
      { id: userId, email: user.email },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRES_TIME,
      }
    );

    // user.token = accessToken;

    return Promise.resolve({ accessToken, refreshToken });
  } catch (error) {
    return Promise.reject(error);
  }
};
