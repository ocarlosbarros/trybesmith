import UserModel from '../models/UserModel';
import connection from '../models/connection';
import IUser from '../intefaces/IUser';

export default class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }
  
  public create = async (user: IUser): Promise<IUser> => {
    const created = await this.model.create(user);
    return created;
  };

  public findById = async (id: number): Promise<IUser> => {
    const founded = await this.model.findById(id);
    return founded;
  };
}
