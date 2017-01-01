const http = require('http');
const env  = process.env;

let server = http.createServer(function (req, res) {
  const url = req.url;

  // IMPORTANT: Your application HAS to respond to GET /health with status 200
  //            for OpenShift health monitoring
  if (url == '/' || url == '/health') {
    res.writeHead(200);
    res.end();
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
