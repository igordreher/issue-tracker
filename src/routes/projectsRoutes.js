const { Router } = require('express');

const routes = Router();

routes.get('/api/projects', (req, res) => {
    res.send("Hello World");
});

routes.get('/api/projects/:id', (req, res) => {
    res.send("Hello World");
});

routes.post('/api/projects', (req, res) => {
    res.send("Hello World");
});

routes.patch('/api/projects/:id', (req, res) => {
    res.send("Hello World");
});

routes.delete('/api/projects/:id', (req, res) => {
    res.send("Hello World");
});

module.exports = routes;