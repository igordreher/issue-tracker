import express, { NextFunction, Request, Response } from 'express';
import errorHandler from './errors/handler';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({ error: 'Resource not found' });
});

export default app;