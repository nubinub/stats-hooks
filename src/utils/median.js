const median = (sorted) => {
  let median = NaN;
  if (sorted.length) {
    let a = null;
    let b = null;
    if (sorted.length % 2) {
      a = sorted[Math.floor(sorted.length / 2)];
      b = a;
    } else {
      a = sorted[sorted.length / 2];
      b = sorted[sorted.length / 2 - 1];
    }

    median = (a + b) / 2;
  }
  return median;
};

export default median;
