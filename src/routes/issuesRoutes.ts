import { Router } from 'express';

const routes = Router();

routes.get('/api/issues', (req, res) => {
    res.send("Hello World");
});

routes.get('/api/issues/:id', (req, res) => {
    res.send("Hello World");
});

routes.post('/api/issues', (req, res) => {
    res.send("Hello World");
});

routes.patch('/api/issues/:id', (req, res) => {
    res.send("Hello World");
});

routes.delete('/api/issues/:id', (req, res) => {
    res.send("Hello World");
});

export default routes;