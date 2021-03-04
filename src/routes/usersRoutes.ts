import { Router } from 'express';
import usersController from '../controllers/usersController';

const routes = Router();

routes.get('/users', usersController.index);

routes.post('/users', usersController.create);

routes.patch('/users/:id', usersController.update);

routes.delete('/users/:id', usersController.delete);

export default routes;