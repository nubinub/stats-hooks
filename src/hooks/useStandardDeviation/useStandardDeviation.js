import { useMemo } from 'react';
import useMean from '../useMean';
import useValues from '../useValues';
import standardDeviation from '../../utils/standardDeviation';

const useStandardDeviation = (data, field) => {
  const values = useValues(data, field);
  const mean = useMean(values);
  return useMemo(() => standardDeviation(values, mean), [mean, values]);
};

export default useStandardDeviation;
