const express = require('express');

const leaderRouter = express.Router();

leaderRouter
  .route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('Sending all the leaders!');
  })
  .post((req, res, next) => {
    res.end(
      `Adding ${req.body.name} to leaders with details ${req.body.description}`
    );
  })
  .put((req, res, next) => {
    res.end('Put operation not supported!!');
  })
  .delete((req, res, next) => {
    res.end('Deleting all leaders');
  });

leaderRouter
  .route('/:leaderId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end(`Will send the leader number ${req.params.leaderId} soon!`);
  })
  .post((req, res, next) => {
    res.end('Post operation not supported on /leaders/:leaderId');
  })
  .put((req, res, next) => {
    res.end(`Will update the leader: ${req.params.leaderId}`);
  })
  .delete((req, res, next) => {
    res.end(`Deleting the leader ${req.params.leaderId}`);
  });

module.exports = leaderRouter;
