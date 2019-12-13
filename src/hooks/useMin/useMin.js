import { useMemo } from 'react';
import min from '../../utils/min';

const useMin = (data, field) => {
  const values = useValues(data, field);

  return useMemo(() => {
    min(values);
  }, [values]);
};

export default useMin;
