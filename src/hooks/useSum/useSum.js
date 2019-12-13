import { useMemo } from 'react';
import useValues from '../useValues';

const useSum = (data, field) => {
  const values = useValues(data, field);
  const sum = useMemo(() => {
    return values.reduce((acc, val) => acc + val, 0);
  }, [values]);
  return sum;
};

export default useSum;
