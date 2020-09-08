import React, { useState } from 'react';
import Input from './Input';
import DeleteIcon from './DeleteIcon';

const Heading = (props) => {
  const [isEditable, changeEditableState] = useState(false);
  const [isDeleteIconVisible, changeVisibility] = useState(false);

  const showDeleteIcon = () => {
    changeVisibility(true);
  };

  const hideDeleteIcon = () => {
    changeVisibility(false);
  };

  const editHeader = () => {
    changeEditableState(true);
  };

  const updateHeading = (heading) => {
    changeEditableState(false);
    props.updateHeading(heading);
  };

  const deleteIcon = isDeleteIconVisible ? (
    <DeleteIcon delete={props.deleteTodo} />
  ) : (
    ''
  );
  let content = (
    <div
      onMouseOver={showDeleteIcon}
      onMouseLeave={hideDeleteIcon}
      className='task'
    >
      <h1 onClick={editHeader}>{props.heading}</h1>
      {deleteIcon}
    </div>
  );

  if (isEditable) {
    content = (
      <Input
        className='edit-heading'
        value={props.heading}
        onKeyPress={updateHeading}
      />
    );
  }
  return content;
};

export default Heading;
