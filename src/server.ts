import express from 'express';

import issuesRoutes from './routes/issuesRoutes';
import usersRoutes from './routes/usersRoutes';
import projectsRoutes from './routes/projectsRoutes';

const app = express();

app.use(issuesRoutes);
app.use(usersRoutes);
app.use(projectsRoutes);

app.listen(3000, () => console.log("Listening on port 3000"));
