const max = (values) => {
  return values && values.length ? Math.max.apply(...values) : NaN;
};

export default max;
