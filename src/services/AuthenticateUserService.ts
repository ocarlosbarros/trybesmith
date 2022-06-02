import Jwt from 'jsonwebtoken';
import IUser from '../intefaces/IUser';
import AuthenticationError from '../models/AuthenticationError';
import connection from '../models/connection';
import UserModel from '../models/UserModel';

export default class AuthenticateUserService {
  public model: UserModel;
  
  private secret = process.env.JWT_SECRET || '!MoMkVdqx%v49J';

  getSecret() {
    return this.secret;
  }

  constructor() {
    this.model = new UserModel(connection);
  }

  public authenticate = async (user:IUser) => {
    const { id, username, password } = user;
    
    if (!id) {
      const userAuthenticated = await this.model.findUserByCredentials(username, password);
      
      if (!userAuthenticated) throw new AuthenticationError('Username or password invalid');

      const secret = this.getSecret(); 
      
      const token = Jwt.sign({ id: userAuthenticated.id,
        username: userAuthenticated.username }, secret);

      return token;
    }

    const founded = await this.model.findById(id);

    if (!founded) throw new Error('Invalid fields');

    const secret = this.getSecret(); 
    const token = Jwt.sign({ payload: founded.id }, secret);

    return token;
  };
}
