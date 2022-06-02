import IProduct from '../intefaces/IProduct';
import ProductModel from '../models/ProductModel';
import connection from '../models/connection';

export default class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public findAll = async (): Promise<IProduct[]> => {
    const products = await this.model.findAll();
        
    return products;
  };

  public create = async (product: IProduct): Promise<IProduct> => {
    const created = await this.model.create(product);
    return created;
  };
}
