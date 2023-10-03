require('dotenv').config();
require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const DBConnection = require('./db/db_connect');
const vendorRouter = require('./routes/router');

DBConnection();
app.use(express.json());

app.use(vendorRouter);

app.use((req, res, next) => {
  const error = new Error('Invalid Request');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

app.listen(PORT, () => {
  PORT, console.log(`Server is running http://localhost:${PORT}`);
});
