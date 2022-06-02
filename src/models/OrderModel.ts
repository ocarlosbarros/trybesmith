import { Pool } from 'mysql2/promise';
import IOrder from '../intefaces/IOrder';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public findAll = async (): Promise<IOrder[]> => {
    const query = `
    SELECT O.id AS orderId, O.userId AS userId, JSON_ARRAYAGG(P.id) AS productsIds 
    FROM Trybesmith.Orders AS O
      INNER JOIN Trybesmith.Products AS P ON P.orderId = O.id
      GROUP BY O.userId, O.id;
    


    `;
    const [orders] = await this.connection.execute(query);
    return orders as IOrder[];
  };
}
