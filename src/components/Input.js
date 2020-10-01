import React, { useState } from 'react';

const Input = (props, Component) => {
  const [input, updateInput] = useState(props.value);

  const handleKeyPress = (event) => {
    event.preventDefault();
    if (input) {
      props.onKeyPress(input);
      updateInput('');
    }
  };

  const handleChange = (event) => {
    updateInput(event.target.value);
  };

  return (
    <form onSubmit={handleKeyPress}>
      <input
        className={props.className}
        value={input}
        onChange={handleChange}
      />
    </form>
  );
};

Input.defaultProps = {
  value: '',
  className: '',
};

export default Input;
