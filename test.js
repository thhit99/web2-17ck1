const Todo = require('./services/todo');

console.log(Todo.findAll());
console.log(Todo.add('Di cho'));
console.log(Todo.add('Lam deadline'));
console.log(Todo.findAll());
const todo2 = Todo.findById(2);
Todo.markAsDone(todo2);
console.log(Todo.findAll());