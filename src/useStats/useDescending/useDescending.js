import React from 'react';

const useDescending = (ascending) => {
  return React.useMemo(() => {
    return [...ascending].reverse();
  }, [ascending]);
};

export default useDescending;
