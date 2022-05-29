import express from 'express';
import rootRouter from './routes/index';
import errorHandler from './middleware/errorHandler';

const app = express();

app.use(express.json());
app.use(rootRouter);

app.use(errorHandler);
export default app;
