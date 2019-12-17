import React from 'react';

const useReverse = (data = []) => {
  return React.useMemo(() => [...data].reverse(), [data]);
};

export default useReverse;
