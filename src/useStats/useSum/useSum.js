import { useMemo } from 'react';

const useSum = (data) => {
  const sum = useMemo(() => {
    return data.reduce((acc, val) => acc + val, 0);
  }, [data]);
  return sum;
};

export default useSum;
