import { Router } from 'express';
import usersController from '../controllers/usersController';

const routes = Router();

routes.get('/users', usersController.find);

routes.get('/users/:id', usersController.find);

routes.post('/users', usersController.create);

routes.patch('/users/:id', usersController.update);

routes.delete('/users/:id', usersController.delete);

export default routes;