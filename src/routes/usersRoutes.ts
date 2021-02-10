import { Router } from 'express';
import usersController from '../controllers/UsersController';

const routes = Router();

routes.get('/api/users', usersController.index);

routes.get('/api/users/:id', (req, res) => {
    res.send("Hello World");
});

routes.post('/api/users', usersController.create);

routes.patch('/api/users/:id', usersController.update);

routes.delete('/api/users/:id', usersController.delete);

export default routes;