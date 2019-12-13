import React from 'react';
import useSum from '../useSum';
import mean from '../../utils/mean';

const useMean = (data, field) => {
  const sum = useSum(data, field);
  return React.useMemo(() => {
    return mean(sum, data.length)
  }, [sum, data.length]);
};

export default useMean;
