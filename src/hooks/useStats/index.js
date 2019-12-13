import React from 'react';
import useSum from '../useSum';
import useAscending from '../useAscending';
import useStandardDeviation from '../useStandardDeviation';
import useValues from '../useValues';
import useReverse from '../useReverse';
import medianFn from '../../utils/median';
import meanFn from '../../utils/mean';
import standardDeviation from '../../utils/standardDeviation';

const useStats = (data, field) => {
  const values = useValues(data, field);
  const ascending = useAscending(data, field);
  const descending = useReverse(ascending);
  const ascendingValues = useValues(ascending, field);
  const descendingValues = useValues(descending, field);
  const sum = useSum(values);
  const mean = React.useMemo(() => {
    return meanFn(sum, values.length);
  }, [values, sum]);
  const median = React.useMemo(() => medianFn(ascendingValues), [ascendingValues]);
  const sd = React.useMemo(() => {
    return standardDeviation(values, mean);
  }, [values, mean]);
  const min = React.useMemo(() => ascendingValues.length ? ascendingValues[0] : NaN, [ascendingValues]);
  const max = React.useMemo(() => descendingValues.length ? descendingValues[0] : NaN, [descendingValues]);

  return { data, values, ascending, descending, ascendingValues, descendingValues, sum, mean, median, sd, min, max };
};

export default useStats;
