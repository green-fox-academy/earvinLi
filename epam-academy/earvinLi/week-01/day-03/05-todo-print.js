'use strict';
// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention

// Expected outpt:

// My todo:
//  - Buy milk
//  - Download games
//      - Diablo

var todoText = " - Buy milk\n";

const newTodoText = todoText.split(' ');
newTodoText.splice(0, 0, 'My todo:\n');
newTodoText.push(' - Download games\n');
newTodoText.push('    - Diablo');
const targetTodoText = newTodoText.join(' ');

console.log(targetTodoText);
