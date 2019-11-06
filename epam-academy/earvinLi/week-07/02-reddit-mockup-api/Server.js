// External Dependencies
require('dotenv').config();
const cors = require('cors');
const express = require('express');

// Internal Dependencies
const PostsRouter = require('./PostsRouter');
const PostVoteRouter = require('./PostVoteRouter');

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
Server.use('/posts', PostsRouter);
Server.use('/posts', PostVoteRouter);

Server.listen(PORT, () => console.log(`Server running at ${PORT}.`));
