import { Router } from 'express';

const routes = Router();

routes.get('/api/users', (req, res) => {
    res.send("Hello World");
});

routes.get('/api/users/:id', (req, res) => {
    res.send("Hello World");
});

routes.post('/api/users', (req, res) => {
    res.send("Hello World");
});

routes.patch('/api/users/:id', (req, res) => {
    res.send("Hello World");
});

routes.delete('/api/users/:id', (req, res) => {
    res.send("Hello World");
});

export default routes;