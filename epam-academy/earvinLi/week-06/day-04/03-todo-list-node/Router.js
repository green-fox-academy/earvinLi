// External Dependencies
require('dotenv').config();
const Router = require('express').Router();

Router.get('/', (req, res) => res.status(200).send(todoTable));

Router.post('/', (req, res) => {
  // TODO: 'res.end()' does not stop the function?
  if (!req.body.text) return res.status(400).end('Please provide some text of your todo.');

  const newTodo = {
    id: todoTable.length + 1,
    text: req.body.text,
    done: false,
  };
  todoTable.push(newTodo);
  res.status(201).send(newTodo);
});

module.exports = Router;

const todoTable = [
  { id: 1, text: 'Buy some Focal Banger', done: false },
  { id: 2, text: 'Drink them all', done: false },
];
