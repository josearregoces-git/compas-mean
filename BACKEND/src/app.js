const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 3200);

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//EMPLOYEES
app.use("/api/employees", require('./routes/employees.route'));

module.exports = app;