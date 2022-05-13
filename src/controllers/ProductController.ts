import { Request, Response } from 'express';

const findAll = (_request: Request, _response: Response): void => {
  const products:string[] = [];
  try {
    console.log(products);
  } catch (error) {
    console.log(error);
  }
};

const create = (request: Request, response: Response) => {
  const product = request.body;
  console.log(product);
  return response.status(200).json({ message: 'OK' });
};

export {
  findAll,
  create,
};