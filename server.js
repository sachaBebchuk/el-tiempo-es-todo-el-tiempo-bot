
const express = require('express');

const controladores = require("./controladores.js");

const server = express();

const port = 3000;

server.set('view engine', 'pug');

controladores.cargar(server);

server.use(express.static('public'));

server.listen(port, () => {
  console.log(`Server funcionando en el puerto: ${port}`);
});

module.exports = server;