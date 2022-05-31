import Jwt from 'jsonwebtoken';
import IUser from '../intefaces/IUser';
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
    const { id } = user;
    
    if (!id) return;
    
    const founded = await this.model.findById(id);

    if (!founded) throw new Error('Invalid fields');

    const secret = this.getSecret(); 
    const token = Jwt.sign({ payload: founded.id }, secret);

    return token;
  };
}
