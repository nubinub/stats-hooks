import { useMemo } from 'react';
import useValues from '../useValues';
import max from '../../utils/max';

const useMax = (data, field) => {
  const values = useValues(data, field);

  return useMemo(() => max(values), [values]);
};

export default useMax;
