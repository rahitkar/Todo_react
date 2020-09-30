import React, { useState } from 'react';
import styled from 'styled-components';
import DeleteIcon from './DeleteIcon';

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

const statusColours = { todo: 'lightblue', doing: 'orange', done: 'green' };

const StyledIndicator = styled.div`
  width: 14px;
  height: 18px;
  margin-right: 6px;
  background-color: ${({ status }) => statusColours[status]};
`;

const StyledText = styled.span`
  cursor: pointer;
`;

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

  return (
    <Wrapper onMouseOver={showDeleteIcon} onMouseLeave={hideDeleteIcon}>
      <StyledIndicator status={status}></StyledIndicator>
      <StyledText className='todoText' id={id} onClick={handleClick}>
        {text}
      </StyledText>
      {deleteElement}
    </Wrapper>
  );
};

export default TodoItem;
