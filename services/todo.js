const todos = [];

function findAll() {
    return todos.filter(t => !t.done);
}

function findById(id) {
    return todos.find(t => t.id === id);
}

function markAsDone(todo) {
    todo.done = true;
}

function add(name) {
    const todo = { name, done: false };
    todo.id = todos.length + 1;
    todos.push(todo);
    return todo;

}
module.exports = {
    findAll,
    findById,
    markAsDone,
    add,
};