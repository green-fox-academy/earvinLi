// External Dependencies
require('dotenv').config();
const express = require('express');

// Internal Dependencies
const PORT = process.env.PORT;
const Router = require('./Router');

const server = express();
server.use(express.json());
server.use('/todos', Router);

server.listen(PORT, () => console.log(`Server running at ${PORT}`));
