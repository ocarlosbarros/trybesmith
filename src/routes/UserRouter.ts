import { Router } from 'express';
import UserController from '../controllers/UserController';
import validateUser from '../middleware/validateUser';

const UserRouter = Router();

const userController = new UserController();

UserRouter.post('/', validateUser, userController.create);

export default UserRouter;