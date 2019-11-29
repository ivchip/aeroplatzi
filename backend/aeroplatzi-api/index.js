/* eslint-disable no-console */
const express = require('express');
const helmet = require('helmet');
const app = express();

const { config } = require('./config/index');

const authApi = require('./routes/auth');
const flightsApi = require('./routes/flights');

const {
  logErrors,
  wrapErrors,
  errorHandler
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler');
const cors = require('cors');

// body parser
app.use(cors());
app.use(express.json());
app.use(helmet());

// routes
authApi(app);
flightsApi(app);

// Catch 404
app.use(notFoundHandler);

// Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, (err) => {
  if (err) {
    console.error("Error listening: ", err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});
