import React from 'react';

const useDescending = (data = [], field = undefined) => {
  return React.useMemo(() => {
    return [...data].sort((a, b) => field ? b[field] - a[field] : b - a);
  }, [data, field]);
};

export default useDescending;
