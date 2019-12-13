import { useMemo } from 'react';
import useValues from '../useValues';
import max from '../../utils/max';

const useMax = (data, field) => {
  const values = useValues(data, field);

  return useMemo(() => {
    return max(values);
  }, [values]);
};

export default useMax;
