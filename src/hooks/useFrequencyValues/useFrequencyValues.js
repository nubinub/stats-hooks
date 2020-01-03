import React from 'react';
import useValues from '../useValues';

const useFrequencyValues = (data, field) => {
  const values = useValues(data, field);
  return React.useMemo(() => {
    const fv = {};

    values.forEach(value => fv[value]  ? fv[value].n++ : fv[value] = {value, n: 1});

    return Object.values(fv);
  }, [values]);
};

export default useFrequencyValues;
