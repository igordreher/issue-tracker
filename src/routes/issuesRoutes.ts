import { Router } from 'express';
import issuesController from '../controllers/issuesController';

const routes = Router();

routes.get('/issues', issuesController.find);

routes.post('/issues', issuesController.create);

routes.patch('/issues/:id', issuesController.update);

routes.delete('/issues/:id', issuesController.delete);

export default routes;