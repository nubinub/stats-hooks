import React from 'react';
import useStats from 'stats-hooks';

const useArr = (arr) => {
  return React.useMemo(() => arr.join(','), [arr]);
};

const App = () => {
  const [text, setText] = React.useState('');
  const [data, setData] = React.useState([]);
  const stats = useStats(data);
  const values = useArr(stats.values);
  const ascending = useArr(stats.ascending);
  const descending = useArr(stats.descending);

  React.useEffect(() => {
    if (text.match(/^([-+]?([0-9]+.[0-9]+|[0-9]*)){1}(,[-+]?([0-9]+.[0-9]+|[0-9]*))*$/)) {
      setData(text.split(',').map((e) => +e));
    }
  }, [text]);

  return (
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
    </div>
  );
};

export default App;
