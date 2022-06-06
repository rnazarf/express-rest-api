require('dotenv').config();

const createError = require("http-errors");
const express = require("express");
const cors = require("cors");
const path = require("path");

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use(routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port http://${process.env.HOST}:${process.env.PORT}/`);
})