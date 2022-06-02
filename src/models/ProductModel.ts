import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../intefaces/IProduct';

export default class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public findAll = async (): Promise<IProduct[]> => {
    const query = 'SELECT * FROM Trybesmith.Products;';
    const result = await this.connection.execute(query);
  
    const [row] = result;
  
    return row as IProduct[];
  };

  public create = async (product: IProduct) => {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.Products(name, amount) VALUES (?, ?);';
    const result = await this.connection.execute<ResultSetHeader>(
      query,
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  };

  public update = async (orderId: number, productId: number) => {
    const query = 'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?;';
    await this.connection.execute<ResultSetHeader>(
      query,
      [orderId, productId],
    );
  };
}
