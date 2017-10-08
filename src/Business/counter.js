const _limitIncrement = (value) => {
  const LIMIT = 10;
  
  if (value > LIMIT) return LIMIT;
  return value;
};

const _limitDecrement = (value) => {
  const LIMIT = 0;

  if (value <= LIMIT) return LIMIT;
  return value;
};

const increment = (value = 0) => {
  value += 1;
  value = _limitIncrement(value);
  return value;
};

const decrement = (value = 0) => {
  value -= 1;
  value = _limitDecrement(value);
  return value;
};

export { increment };
export { decrement };