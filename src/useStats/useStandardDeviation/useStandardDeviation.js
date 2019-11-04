import { useMemo } from 'react';

const useStandardDeviation = (mean, data) => {
  const sd = useMemo(() => {
    let sum = data.reduce((acc, val) => acc + Math.pow(Math.abs(val - mean), 2), 0);
    return Math.sqrt(sum / data.length);
  }, [mean, data]);

  return sd;
};

export default useStandardDeviation;
