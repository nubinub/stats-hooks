import { useMemo } from 'react';

const useMin = (sorted) => {
  const min = useMemo(() => {
    return sorted.length ? sorted[0] : NaN;
  }, [sorted]);

  return min;
};

export default useMin;
