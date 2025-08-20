//ES Modules - Padrão de móulos dos navegadores (JS Modernno) sendo adotado pel Nodejs
// server.mjs
import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.end('Aplicação Web servida pelo módulo HTTP do Node.js (MJS)');

});

server.listen(port, hostname, () => {
  console.log(`SERVIDOR EM EXECUÇÃO  http://${hostname}:${port}/`);
});


// run with `node server.mjs`
