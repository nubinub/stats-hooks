const min = (values) => {
  return values && values.length ? Math.min.apply(...values) : NaN;
};

export default min;
