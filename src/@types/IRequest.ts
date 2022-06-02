import { Request } from 'express';

interface IRequest extends Request{
  userId?:number
}

export default IRequest;