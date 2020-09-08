const TodoApi = {};

TodoApi.getTodoData = () => {
  return fetch('/api/getTodoData').then((res) => res.json());
};

TodoApi.addTodo = (todoText) => {
  return fetch('/api/addTodo', {
    method: 'post',
    body: JSON.stringify({ todoText }),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
};

TodoApi.updateTodoStatus = (todoId) => {
  return fetch(`/api/updateTodoStatus/${todoId}`, {
    method: 'post',
  }).then((res) => res.json());
};

TodoApi.deleteTodo = (todoId) => {
  return fetch(`/api/deleteTodo/${todoId}`, {
    method: 'post',
  }).then((res) => res.json());
};

TodoApi.setHeading = (heading) => {
  return fetch('/api/updateHeading', {
    method: 'post',
    body: JSON.stringify({ heading }),
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => res.json());
};

TodoApi.deleteTodoList = () => {
  return fetch('/api/deleteTodoList').then((res) => res.json());
};

export default TodoApi;
