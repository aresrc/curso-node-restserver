// Carga las variables de entorno del archivo .env
require('dotenv').config();

// Importa la clase Server
const Server = require('./models/server');

// Crea una instancia de la clase Server
const server = new Server();

// Inicia el servidor para que escuche en el puerto configurado
server.listen();
