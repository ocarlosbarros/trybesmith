import { Pool } from 'mysql2/promise';
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
}
