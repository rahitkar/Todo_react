import React from 'react';
import TodoItem from './TodoItem';
import './todo.css';

const TodoItems = function(props) {
  const todoList = props.todoList.map((todo, index) => {
    return (
      <TodoItem
        delete={props.deleteItem}
        todo={todo}
        onClick={props.onClick}
        key={todo.id}
      />
    );
  });
  return <div>{todoList}</div>;
};

export default TodoItems;
