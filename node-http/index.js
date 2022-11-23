const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url} by method ${req.method}`);

  if (req.method == 'GET') {
    let fileUrl;
    if (req.url == '/') fileUrl = '/index.html';
    else fileUrl = req.url;

    let filePath = path.resolve(`./public${fileUrl}`);
    let fileExt = path.extname(filePath);

    if (fileExt == '.html') {
      if (!fs.existsSync(filePath)) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(
          `<html>
            <body>
              <h1>Error 404 ${fileUrl} not found</h1>
            </body>
          </html>`
        );
        return;
      }

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      fs.createReadStream(filePath).pipe(res);

      //   fs.exists(filePath, (exists) => {
      //     if (!exists) {
      //       res.statusCode = 404;
      //       res.setHeader('Content-Type', 'text/html');
      //       res.end(
      //         `<html><body><h1>Error 404: ${fileUrl} not found</h1></body></html>`
      //       );

      //       return;
      //     }

      // res.end(`<>`);
      //   });
    } else {
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end(
        `<html><body><h1>Error 404: ${fileUrl} not an HTML file</h1></body></html>`
      );

      return;
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end(
      `<html><body><h1>Error 404: ${req.method} not supported</h1></body></html>`
    );

    return;
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
