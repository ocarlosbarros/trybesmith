import { Router } from 'express';
import UserController from '../controllers/UserController';
import validateLogin from '../middleware/validateLogin';

const RegisterRouter = Router();

const userController = new UserController();

RegisterRouter.post('/', validateLogin, userController.login);

export default RegisterRouter;