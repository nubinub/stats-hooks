import useStats from './hooks/useStats';
import useValues from './hooks/useValues';
import useAscending from './hooks/useAscending';
import useDescending from './hooks/useDescending';
import useMean from './hooks/useMean';
import useMedian from './hooks/useMedian';
import useSum from './hooks/useSum';
import useMin from './hooks/useMin';
import useMax from './hooks/useMax';
import useStandardDeviation from './hooks/useStandardDeviation';

export default useStats;

export const exp = {
  useValues,
  useAscending,
  useDescending,
  useMax,
  useMin,
  useMean,
  useMedian,
  useSum,
  useStandardDeviation,
};
