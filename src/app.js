process.env.PWD = process.cwd();
const express = require('express');
require('dotenv/config');
const Youch = require('youch');
const cors = require('cors');
require('./database');
require('express-async-errors');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.handleExceptions();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(cors());
  }

  routes() {
    this.server.use(require('./routes'));
  }

  handleExceptions() {
    this.server.use(async (err, req, res, next) => {
      if (process.env.NODE_ENV === 'development') {
        const errors = await new Youch(err, req).toJSON();
        console.log(errors);
        return res.status(500).json(errors);
      }
      return res.status(500).json({ error: 'Internal server error' });
    });
  }
}

module.exports = new App().server;
