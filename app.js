var http = require('http');
var port = process.env.PORT || 2345;

module.exports = http.createServer(function (req, res) {
  res.writeHead(404, {'Content-Type': 'text/plain'});

  if (req.url.indexOf('/suggestions') === 0) {
    res.end(JSON.stringify({
      "suggestions": [
        {
          "name": "London, ON, Canada",
          "latitude": "42.98339",
          "longitude": "-81.23304",
          "score": 0.9
        },
        {
          "name": "London, OH, USA",
          "latitude": "39.88645",
          "longitude": "-83.44825",
          "score": 0.5
        },
        {
          "name": "London, KY, USA",
          "latitude": "37.12898",
          "longitude": "-84.08326",
          "score": 0.5
        },
        {
          "name": "Londontowne, MD, USA",
          "latitude": "38.93345",
          "longitude": "-76.54941",
          "score": 0.3
        }
      ]
    }));
  } else {
    res.end();
  }
}).listen(port, '127.0.0.1');

console.log('Server running at http://127.0.0.1:%d/suggestions', port);