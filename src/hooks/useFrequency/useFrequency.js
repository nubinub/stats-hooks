import React from 'react';
import useMin from '../useMin';
import useMax from '../useMax';
import useValues from '../useValues';

const useFrequency = (data = [], step = 10, field = undefined) => {
  const min = useMin(data, field);
  const max = useMax(data, field);
  const values = useValues(data, field);

  const intervalMin = React.useMemo(() => {
    if(isNaN(min) || step == undefined) {
      return NaN;
    }
    if (min >= 0) {
      return min - min % step;
    }
    return min - (step - (Math.abs(min) % step));
  }, [min, step]);

  return React.useMemo(() => {
    const frequency = [];
    if (!isNaN(intervalMin) && step !== undefined && !isNaN(max)) {
      for (let i = intervalMin; i <= max; i += step) {
        frequency.push({
          lowerBound: i,
          upperBound: i + step,
          n: values.filter((v) => v >= i && v < (i + step)).length
        });
      }
    }
    return frequency;
  }, [intervalMin, max, values, step]);
};

export default useFrequency;
