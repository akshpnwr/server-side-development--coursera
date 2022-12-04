const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/dishes', (req, res, next) => {
  res.end('Will send the dishes to you soon!!');
});

app.post('/dishes', (req, res, next) => {
  res.end(
    `Will add the dish : ${req.body.name} with details : ${req.body.description}`
  );
});

app.put('/dishes', (req, res, next) => {
  res.statusCode = 403;
  res.end('Put operation not supported on /dishes');
});

app.delete('/dishes', (req, res, next) => {
  res.end('Deleting all the dishes!!');
});

app.all('/dishes/:dishId', (req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  next();
});

app.get('/dishes/:dishId', (req, res, next) => {
  res.end(`Will send the dish number ${req.params.dishId} soon!`);
});

app.post('/dishes/:dishId', (req, res, next) => {
  res.end('Post operation not supported on /dishes/:dishId');
});

app.put('/dishes/:dishId', (req, res, next) => {
  res.end(`Will update the dish: ${req.params.dishId}`);
});

app.delete('/dishes/:dishId', (req, res, next) => {
  res.end(`Deleting the dish ${req.params.dishId}`);
});

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an express server!</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
