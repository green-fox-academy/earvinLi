// External Dependencies
require('dotenv').config();
const Router = require('express').Router();

Router.get('/', (req, res) => res.status(200).send(todoTable));

Router.post('/', (req, res) => {
  if (!req.body.text) return res.status(400).end('Please provide some text of your todo.');

  const newTodo = {
    // TODO: Optimize the id handling
    id: todoTable[todoTable.length - 1].id + 1,
    text: req.body.text,
    done: false,
  };
  todoTable.push(newTodo);
  res.status(201).send(newTodo);
});

Router.delete('/:id', (req, res) => {
  const idFromParam = parseInt(req.params.id);

  if (!idFromParam || !todoTable.find(item => item.id === idFromParam)) return res.status(404).send('Please provide a valid id.');

  todoTable = todoTable.filter(item => item.id !== idFromParam);
  res.status(204).send();
});

module.exports = Router;

let todoTable = [
  { id: 1, text: 'Buy some Focal Banger', done: false },
  { id: 2, text: 'Drink them all', done: false },
];
