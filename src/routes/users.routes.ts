import { Router } from 'express';
import ensureAuthenticateUser from '../middleware/ensureAuthenticateUser';
import CreateUserService from '../services/CreateUserService'

const usersRouter = Router();

const createUserService = new CreateUserService ()

usersRouter.get('/', ensureAuthenticateUser , async (request, response) => {
  // const { name, email, password } = request.body;

  // const user = await createUserService.execute({
  //   name,
  //   email,
  //   password
  // })

  // return response.json(user);

  response.send('OK!')

});

export default usersRouter;
