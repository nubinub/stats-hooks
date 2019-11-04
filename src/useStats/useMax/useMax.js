import { useMemo } from 'react';

const useMax = (sorted) => {
  const max = useMemo(() => {
    return sorted.length ? sorted[sorted.length - 1] : NaN;
  }, [sorted]);

  return max;
};

export default useMax;
