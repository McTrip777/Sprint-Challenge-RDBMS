const server = require('./server.js');

server.listen(4000, () =>
  console.log(`API running on http://localhost:4000`)
);