import { useMemo } from 'react';

const useAscending = (data, field) => {
  const ascending = useMemo(() => {
    return [...data].sort((a, b) => field ? a[field] - b[field] : a - b);
  }, [data, field]);

  return ascending;
};

export default useAscending;
