import { useMemo } from 'react';

const useMedian = (sorted) => {
  const median = useMemo(() => {
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
  }, [sorted]);

  return median;
};

export default useMedian;
