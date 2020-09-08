import React from 'react';
import deleteIcon from './delete.svg';

export default (props) => {
  return (
    <img src={deleteIcon} alt='delete icon' onClick={() => props.delete()} />
  );
};
