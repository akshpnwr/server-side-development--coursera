const bodyParser = require('body-parser');
const express = require('express');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('Will send the dishes to you soon!!');
  })
  .post((req, res, next) => {
    res.end(
      `Will add the dish : ${req.body.name} with details : ${req.body.description}`
    );
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /dishes');
  })
  .delete((req, res, next) => {
    res.end('Deleting all the dishes!!');
  });

module.exports = dishRouter;
