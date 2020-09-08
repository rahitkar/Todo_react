import React, { useState } from 'react';
import DeleteIcon from './DeleteIcon';

const TodoItem = (props) => {
  const [isDeleteIconVisible, changeVisibility] = useState(false);

  const handleClick = (event) => {
    props.onClick(event.target.id);
  };

  const _delete = (id) => {
    props.delete(id);
  };

  const showDeleteIcon = () => {
    changeVisibility(true);
  };

  const hideDeleteIcon = () => {
    changeVisibility(false);
  };

  const { id, text, status } = props.todo;
  let deleteElement;
  if (isDeleteIconVisible) {
    deleteElement = <DeleteIcon delete={() => _delete(id)} />;
  }

  const classes = `task ${status}`;
  return (
    <div
      className={classes}
      onMouseOver={showDeleteIcon}
      onMouseLeave={hideDeleteIcon}
    >
      <div className='indicator'></div>
      <span className='todoText' id={id} onClick={handleClick}>
        {text}
      </span>
      {deleteElement}
    </div>
  );
};

export default TodoItem;
