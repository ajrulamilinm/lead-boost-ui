import jwt from 'jsonwebtoken';

export function verifyToken(token) {
  try {
    return jwt.verify(token, 'your_jwt_secret');
  } catch (e) {
    return null;
  }
}
