// External Dependencies
const Router = require('express').Router();

Router.get('/', (req, res) => res.send('GET OK!'));

module.exports = Router;
