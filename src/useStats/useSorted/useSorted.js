import { useMemo } from 'react';

const useSorted = (data) => {
  const sorted = useMemo(() => {
    return [...data].sort((a, b) => a - b);
  }, [data]);

  return sorted;
};

export default useSorted;
