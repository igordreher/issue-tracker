const express = require('express');
const issuesRoutes = require('./routes/issuesRoutes');
const usersRoutes = require('./routes/usersRoutes');
const projectsRoutes = require('./routes/projectsRoutes');

const app = express();

app.use(issuesRoutes);
app.use(usersRoutes);
app.use(projectsRoutes);

app.listen(3000, () => console.log("Listening on port 3000"));
