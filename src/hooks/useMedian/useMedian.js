import { useMemo } from 'react';
import useAscending from '../useAscending';
import median from '../../utils/median';
import useValues from '../useValues';

const useMedian = (data, field) => {
  const values = useValues(data, field);
  const sorted = useAscending(values);
  return useMemo(() => {
    median(sorted);
  }, [sorted]);
};

export default useMedian;
