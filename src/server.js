const express = require('express');
const issuesRoutes = require('./routes/issuesRoutes');

const app = express();

app.use(issuesRoutes);

app.listen(3000, () => console.log("Listening on port 3000"));
