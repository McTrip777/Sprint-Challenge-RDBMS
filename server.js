const express = require('express');
const helmet = require('helmet');

const actionRouter = require('./data/router/actionRouter.js');
const projectRouter = require('./data/router/projectRouter.js');

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/action', actionRouter);
server.use('/project', projectRouter);

server.get('/', (req,res) => {
    res.send('Hello World');
});

module.exports = server;