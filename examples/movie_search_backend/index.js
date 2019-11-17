const http = require('http');
const url = require('url');
const imdb = require('imdb-api');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(async (req, res) => {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  let response;
  if (query.movie) {
    response = await imdb.get({ name: query.movie },
      {
        apiKey: 'ca8c3d9', timeout: 30000
      });
  } else {
    response = "Please provide movie name to search";
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(response));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});