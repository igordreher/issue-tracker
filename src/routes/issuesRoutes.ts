import { Router } from 'express';
import issuesController from '../controllers/IssuesController';

const routes = Router();

routes.get('/api/issues', issuesController.index);

routes.post('/api/issues', issuesController.create);

routes.patch('/api/issues/:id', issuesController.update);

routes.delete('/api/issues/:id', issuesController.delete);

export default routes;