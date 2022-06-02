interface IOrder {
  orderId?:number;
  userId: number;
  productsIds: number[];
}
  
export default IOrder;
