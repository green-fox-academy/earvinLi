// External Dependencies
require('dotenv').config();
const cors = require('cors');
const express = require('express');

// Internal Dependencies
const PostsRouter = require('./PostsRouter');

// Local Variables
const PORT = process.env.PORT;
const corsOptions = {
  origin: 'http://localhost:3000',
};

// Server Configuration
const Server = express();
Server.use(cors(corsOptions));
Server.use(express.json());
Server.use('/posts', PostsRouter);

Server.listen(PORT, () => console.log(`Server running at ${PORT}.`));
