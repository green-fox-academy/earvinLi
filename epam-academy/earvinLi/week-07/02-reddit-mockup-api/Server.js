// External Dependencies
require('dotenv').config();
const cors = require('cors');
const express = require('express');

// Internal Dependencies
const PostGetRouter = require('./PostGetRouter');
const PostPostRouter = require('./PostPostRouter');
const PostPutRouter = require('./PostPutRouter');
const PostDeleteRouter = require('./PostDeleteRouter');

// Local Variables
const PORT = process.env.PORT;
const corsOptions = {
  origin: 'http://localhost:3000',
};

// Server Configuration
const Server = express();
Server.use(cors(corsOptions));
Server.use(express.json());

// Server Routes Configuration
Server.use('/posts', PostGetRouter);
Server.use('/posts', PostPostRouter);
Server.use('/posts', PostPutRouter);
Server.use('/posts', PostDeleteRouter);

Server.listen(PORT, () => console.log(`Server running at ${PORT}.`));
