import { useMemo } from 'react';

const useValues = (data = [], field = undefined) => {
  const values = useMemo(() => {
    return field ? data.map((a) => a[field]) : [...data];
  }, [data, field]);
  return values;
};

export default useValues;
