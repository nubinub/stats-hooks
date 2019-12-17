import { useMemo } from 'react';
import min from '../../utils/min';
import useValues from '../useValues';

const useMin = (data, field) => {
  const values = useValues(data, field);

  return useMemo(() => min(values), [values]);
};

export default useMin;
