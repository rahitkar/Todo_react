const express = require('express');
const { getDefault, toggleStatus } = require('../src/components/toggle');

const app = express();

let todoData = {
  heading: 'hello everyone',
  todo: [
    { text: 'hi', status: 'todo', id: 0 },
    { text: 'hi', status: 'todo', id: 1 },
  ],
};

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.get('/api/getTodoData', (req, res) => {
  res.json(todoData);
});

app.post('/api/addTodo', (req, res) => {
  const id = todoData.todo.length;
  todoData.todo.push({ text: req.body.todoText, status: getDefault(), id: id });
  res.json(todoData.todo);
});

app.post('/api/updateTodoStatus/:id', (req, res) => {
  todoData.todo.forEach((todo) => {
    if (todo.id === +req.params.id) {
      todo.status = toggleStatus(todo.status);
    }
  });
  res.json(todoData.todo);
});

app.post('/api/deleteTodo/:id', (req, res) => {
  todoData.todo = todoData.todo.filter((todo) => todo.id !== +req.params.id);
  res.json(todoData.todo);
});

app.post('/api/updateHeading', (req, res) => {
  const heading = req.body.heading;
  todoData.heading = heading;
  res.json(todoData.heading);
});

app.get('/api/deleteTodoList', (req, res) => {
  todoData = { heading: 'Todo', todo: [] };
  res.json(todoData);
});

app.listen(8000, () => console.log('listening on 8000'));
