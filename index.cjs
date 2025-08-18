//Comum js - maneira original de enpacotar código javascrit para node
const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.end('Aplicação Web servida pelo módulo HTTP do Node.js');

});

server.listen(port, hostname, () => {
  console.log(`SERVIDOR EM EXECUÇÃO http://${hostname}:${port}/`);
});
