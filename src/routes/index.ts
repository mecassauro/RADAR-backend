import { Router } from 'express';

import usersRouter from './users.routes';
import casesRouter from './cases.routes';

const routes = Router();


routes.use('/user', usersRouter);
routes.use('/cases', casesRouter);

export default routes;
