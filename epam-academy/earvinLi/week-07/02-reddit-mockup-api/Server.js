// External Dependencies
require('dotenv').config();
const express = require('express');

// Internal Dependencies
const PostsRouter = require('./PostsRouter');

const PORT = process.env.PORT;
const Server = express();

Server.use(express.json());
Server.use('/posts', PostsRouter);
Server.listen(PORT, () => console.log(`Server running at ${PORT}.`));
