import { useMemo } from 'react';

const useMean = (sum, nbElements) => {
  const mean = useMemo(() => {
    return sum / nbElements;
  }, [sum, nbElements]);

  return mean;
};

export default useMean;
