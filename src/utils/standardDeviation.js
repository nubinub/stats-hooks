const standardDeviation = (values, mean) => {
  if (!values || !values.length) {
    return NaN;
  }
  const sum = values.reduce((acc, val) => acc + Math.pow(Math.abs(val - mean), 2), 0);
  return Math.sqrt(sum / values.length);
};

export default standardDeviation;
