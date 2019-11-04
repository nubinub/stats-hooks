import useMean from './useMean';
import useSum from './useSum';
import useSorted from './useSorted';
import useMedian from './useMedian';
import useStandardDeviation from './useStandardDeviation';
import useValues from './useValues';
import useMin from './useMin';
import useMax from './useMax';

const useStats = (data, field) => {
  const values = useValues(data, field);
  const sorted = useSorted(values);
  const sum = useSum(values);
  const mean = useMean(sum, values.length);
  const median = useMedian(sorted);
  const sd = useStandardDeviation(mean, values);
  const min = useMin(sorted);
  const max = useMax(sorted);

  return { data, values, sorted, sum, mean, median, sd, min, max };
};

export default useStats;
