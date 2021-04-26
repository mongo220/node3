const express = require('express');
const routes = require('./routes/routes.js');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(routes);
app.listen(3000);