import React from 'react';
import useStats from 'stats-hooks';

const data = [
  {
    key: 'a',
    value: 2,
  },
  {
    key: 'b',
    value: 3,
  },
  {
    key: 'c',
    value: 7,
  },
  {
    key: 'd',
    value: 1,
  },
  {
    key: 'e',
    value: 5,
  },
  {
    key: 'f',
    value: 4,
  },
];

const useArr = (arr) => {
  return React.useMemo(() => arr.join(','), [arr]);
};

const App = () => {
  const stats = useStats(data, 'value');
  const values = useArr(stats.values);
  const sorted = useArr(stats.sorted);

  return (
    <div>
      <div>Values: {values}</div>
      <div>Sorted: {sorted}</div>
      <div>Sum: {stats.sum}</div>
      <div>Mean: {stats.mean}</div>
      <div>Median: {stats.median}</div>
      <div>Standard deviation: {stats.sd}</div>
      <div>Min: {stats.min}</div>
      <div>Max: {stats.max}</div>
    </div>
  );
};

export default App;
