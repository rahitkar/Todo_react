import React, { useState, useEffect } from 'react';
import Input from './Input';
import TodoItems from './TodoItems';
import Heading from './Heading';
import TodoApi from './TodoApi';
import './todo.css';

const Todo = () => {
  const [todo, updateTodo] = useState([]);
  const [heading, changeHeading] = useState('');

  useEffect(() => {
    TodoApi.getTodoData().then(({ heading, todo }) => {
      changeHeading(heading);
      updateTodo(todo);
    });
  }, []);

  const addTodo = (todoText) => {
    TodoApi.addTodo(todoText).then((todo) => updateTodo(todo));
  };

  const updateTodoStatus = (todoId) => {
    TodoApi.updateTodoStatus(todoId).then((todo) => updateTodo(todo));
  };

  const updateHeading = (heading) => {
    TodoApi.setHeading(heading).then(changeHeading);
  };

  const deleteItem = (todoId) => {
    TodoApi.deleteTodo(todoId).then(updateTodo);
  };

  const deleteTodo = () => {
    TodoApi.deleteTodoList().then(({ heading, todo }) => {
      updateTodo(todo);
      updateHeading(heading);
    });
  };

  return (
    <div className='todo-box'>
      <Heading
        heading={heading}
        deleteTodo={deleteTodo}
        updateHeading={updateHeading}
      />
      <TodoItems
        todoList={todo}
        onClick={updateTodoStatus}
        deleteItem={deleteItem}
      />
      <Input onKeyPress={addTodo} />
    </div>
  );
};

export default Todo;
