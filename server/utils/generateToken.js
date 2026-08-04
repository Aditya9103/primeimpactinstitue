import jwt from 'jsonwebtoken';
import { ENV } from '../config/env.js';

const generateToken = (userId) => {
  return jwt.sign({ userId }, ENV.JWT_SECRET, {
    expiresIn: '30d',
  });
};

export default generateToken;
