const DONE = 'done';
const DOING = 'doing';
const TODO = 'todo';

const toggle = {
  [DONE]: TODO,
  [TODO]: DOING,
  [DOING]: DONE,
};

const getDefault = () => TODO;
const toggleStatus = function(currentStatus) {
  return toggle[currentStatus];
};

module.exports = { getDefault, toggleStatus };
