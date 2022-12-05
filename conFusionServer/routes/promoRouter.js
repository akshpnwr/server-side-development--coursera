const express = require('express');

const promoRouter = express.Router();

promoRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('Sending all the promotions!');
  })
  .post((req, res, next) => {
    res.end(
      `Adding ${req.body.name} to promotions with details ${req.body.description}`
    );
  })
  .put((req, res, next) => {
    res.end('Put operation not supported!!');
  })
  .delete((req, res, next) => {
    res.end('Deleting all promotions');
  });

promoRouter
  .route('/:promoId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end(`Will send the promotion number ${req.params.dishId} soon!`);
  })
  .post((req, res, next) => {
    res.end('Post operation not supported on /promotions/:promoId');
  })
  .put((req, res, next) => {
    res.end(`Will update the promotion: ${req.params.dishId}`);
  })
  .delete((req, res, next) => {
    res.end(`Deleting the promotion ${req.params.dishId}`);
  });

module.exports = promoRouter;
