import { NextFunction, Request, Response } from 'express';
import UserService from '../services/UserService';
import AuthenticateUserService from '../services/AuthenticateUserService';

export default class UserController {
  constructor(
    private userService = new UserService(), 
    private authenticateUserService = new AuthenticateUserService(),
  ) {}

  public create = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const user = request.body;
      const created = await this.userService.create(user);

      if (created) {
        const token = await this.authenticateUserService.authenticate(created);
        return response.status(201).json({ token });
      }
    } catch (error) {
      next(error);
    }
  };

  public login = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const { username, password } = request.body;
      const token = await this.authenticateUserService.authenticate({ username, password });
      return response.status(200).json({ token });
    } catch (error) {
      next(error);      
    }
  };
}
