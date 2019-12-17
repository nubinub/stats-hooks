import React from 'react';
import { useStats, useFrequency } from 'stats-hooks';

const useArr = (arr) => {
  return React.useMemo(() => arr.map(e => JSON.stringify(e)).join(','), [arr]);
};

const App = () => {
  const [text, setText] = React.useState('');
  const [data, setData] = React.useState([]);
  const stats = useStats(data);
  const values = useArr(stats.values);
  const ascending = useArr(stats.ascending);
  const descending = useArr(stats.descending);
  const frequency = useFrequency(data, 10);
  const frequencyArr = useArr(frequency);

  React.useEffect(() => {
    if (text.match(/^([-+]?([0-9]+.[0-9]+|[0-9]*)){1}(,[-+]?([0-9]+.[0-9]+|[0-9]*))*$/)) {
      setData(text.split(',').map((e) => +e));
    }
  }, [text]);

  const nestedObjects =  [
    {name: 'a', value: 1},
    {name: 'b', value: -1},
    {name: 'c', value: 3},
    {name: 'd', value: 7},
  ];
  const stats2 = useStats(nestedObjects, 'value');
  const values2 = useArr(stats2.values);
  const ascending2 = useArr(stats2.ascending);
  const ascendingValues = useArr(stats2.ascendingValues);
  const descending2 = useArr(stats2.descending);
  const descendingValues = useArr(stats2.descendingValues);

  return (
    <div>
      <div>
        <textarea value={text} onChange={(event) => setText(event.target.value)}>
        </textarea>
        <div>Values: {values}</div>
        <div>Ascending: {ascending}</div>
        <div>Descending: {descending}</div>
        <div>Sum: {stats.sum}</div>
        <div>Mean: {stats.mean}</div>
        <div>Median: {stats.median}</div>
        <div>Standard deviation: {stats.sd}</div>
        <div>Min: {stats.min}</div>
        <div>Max: {stats.max}</div>
        <div>Frequency: {frequencyArr}</div>
      </div>

      <div>
        <pre>{JSON.stringify(nestedObjects)}</pre>
        <div>Values: {values2}</div>
        <div>Ascending: {ascending2}</div>
        <div>Descending: {descending2}</div>
        <div>Ascending values: {ascendingValues}</div>
        <div>Descending values: {descendingValues}</div>
        <div>Sum: {stats2.sum}</div>
        <div>Mean: {stats2.mean}</div>
        <div>Median: {stats2.median}</div>
        <div>Standard deviation: {stats2.sd}</div>
        <div>Min: {stats2.min}</div>
        <div>Max: {stats2.max}</div>
      </div>
    </div>
  );
};

export default App;
