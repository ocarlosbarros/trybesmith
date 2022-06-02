import connection from '../models/connection';
import OrderModel from '../models/OrderModel';
import ProductModel from '../models/ProductModel';

export default class OrderService {
  public orderModel: OrderModel;

  public productModel: ProductModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public findAll = async () => {
    const orders = await this.orderModel.findAll();
    return orders.map(({ orderId, userId, productsIds }) => ({
      id: orderId,
      userId,
      productsIds,
    }));
  };
}