import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../intefaces/IUser';

export default class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (user: IUser) => {
    const { username, classe, level, password } = user;
    const query = `
      INSERT INTO Trybesmith.Users(username, classe, level, password) 
      VALUES (?, ?, ?, ?);`;
    const result = await this.connection.execute<ResultSetHeader>(
      query,
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...user };
  };

  public findById = async (id: number): Promise<IUser> => {
    const query = 'SELECT * FROM Trybesmith.Users WHERE id = ?;';
    const result = await this.connection.execute(
      query,
      [id],
    );
    const [rows] = result;
    const [user] = rows as IUser[];
    return user;
  };

  public findUserByCredentials = async (username: string, password: string): Promise<IUser> => {
    const query = 'SELECT * FROM Trybesmith.Users WHERE username = ? AND password = ?;';
    const result = await this.connection.execute(
      query,
      [username, password],
    );
    const [rows] = result;
    const [user] = rows as IUser[];
    return user;
  };
}
