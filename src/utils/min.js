const min = (values) => {
  return (values && values.length) ? Math.min(...values) : NaN;
};

export default min;
