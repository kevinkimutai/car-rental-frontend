export const generateAccessToken = (user) => {
  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.AUTH_ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.AUTH_ACCESS_TOKEN_EXPIRY,
    }
  );
};

export const generateRefreshToken = (user) => {
  return jwt.sign(
    { id: user.id, role: user.role },
    process.env.AUTH_REFRESH_TOKEN_SECRET,
    {
      expiresIn: AUTH_REFRESH_TOKEN_EXPIRY,
    }
  );
};
