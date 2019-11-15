import useMean from './useMean';
import useSum from './useSum';
import useAscending from './useAscending';
import useMedian from './useMedian';
import useStandardDeviation from './useStandardDeviation';
import useValues from './useValues';
import useMin from './useMin';
import useMax from './useMax';
import useDescending from './useDescending';

const useStats = (data, field) => {
  const values = useValues(data, field);
  const ascending = useAscending(values);
  const descending = useDescending(ascending);
  const sum = useSum(values);
  const mean = useMean(sum, values.length);
  const median = useMedian(ascending);
  const sd = useStandardDeviation(mean, values);
  const min = useMin(ascending);
  const max = useMax(ascending);

  return { data, values, ascending, descending, sum, mean, median, sd, min, max };
};

export default useStats;
