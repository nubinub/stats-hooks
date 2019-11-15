import { useMemo } from 'react';

const useAscending = (data) => {
  const ascending = useMemo(() => {
    return [...data].sort((a, b) => a - b);
  }, [data]);

  return ascending;
};

export default useAscending;
