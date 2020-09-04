import FirebaseProvider from '../services/Firebase'
import { Request, Response, NextFunction } from 'express';

import AppError from '../errors/AppError';

async function ensureAuthenticateUser(
  request: any,
  response: Response,
  next: NextFunction,
): Promise<void> {
  const { authorization } = request.headers;
  const admin = FirebaseProvider()

  if (!authorization) {
    throw new AppError('Token is missing', 401);
  }
  const [, token] = authorization.split(' ');

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
	request.user = decodedToken;
	console.log(decodedToken)
  } catch {
    throw new AppError('Invalid Token!', 401);
  }

  next();
}

export default ensureAuthenticateUser;
