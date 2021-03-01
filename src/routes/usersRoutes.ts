import { Router } from 'express';
import usersController from '../controllers/usersController';

const routes = Router();

routes.get('/api/users', usersController.index);

routes.post('/api/users', usersController.create);

routes.patch('/api/users/:id', usersController.update);

routes.delete('/api/users/:id', usersController.delete);

export default routes;