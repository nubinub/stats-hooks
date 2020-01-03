import React from 'react';
import { TopAppBar, TopAppBarRow, TopAppBarSection, TopAppBarTitle, TopAppBarFixedAdjust} from '@rmwc/top-app-bar';
import { TextField } from '@rmwc/textfield';
import { Typography } from '@rmwc/typography';
import { useStats, useFrequency } from 'stats-hooks';
import './App.css';

const useArr = (arr) => {
  return React.useMemo(() => arr.map(e => JSON.stringify(e)).join(','), [arr]);
};

const useFrequencyArr = (arr) => {
  return React.useMemo(() => arr.map(({lowerBound, upperBound, n}) => `[${lowerBound},${upperBound}): ${n}`).join(','), [arr]);
};

const App = () => {
  const [text, setText] = React.useState('');
  const [data, setData] = React.useState([]);
  const stats = useStats(data);
  const values = useArr(stats.values);
  const ascending = useArr(stats.ascending);
  const descending = useArr(stats.descending);
  // const frequency = useFrequency(data, 10);
  // const frequencyArr = useFrequencyArr(frequency.filter(f => f.n));

  React.useEffect(() => {
    if (text && text.match(/^([-+]?([0-9]+.[0-9]+|[0-9]*)){1}(,[-+]?([0-9]+.[0-9]+|[0-9]*))*$/)) {
      setData(text.split(',').map((e) => +e));
    }
  }, [text]);

  const code = `const {values, ascending, descending, sum, mean, median, sd, min, max} = useStats([${values}]);`

  return (
    <React.Fragment>
      <TopAppBar>
        <TopAppBarRow>
          <TopAppBarSection>
            <TopAppBarTitle>stats-hooks</TopAppBarTitle>
          </TopAppBarSection>
        </TopAppBarRow>
      </TopAppBar>
      <TopAppBarFixedAdjust />
      <div className="content-wrapper">
        <div>
          <h1>useStats</h1>
          <pre className="mdc-elevation--z1">{code}</pre>
          <TextField
            textarea
            outlined
            fullwidth
            label="1,2,3,...,n"
            rows={3}
            maxLength={500}
            characterCount
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <div><Typography use="subtitle2" tag="span" >Values:</Typography> {values}</div>
          <div><Typography use="subtitle2" tag="span" >Ascending:</Typography> {ascending}</div>
          <div><Typography use="subtitle2" tag="span" >Descending:</Typography> {descending}</div>
          <div><Typography use="subtitle2" tag="span" >Sum:</Typography> {stats.sum}</div>
          <div><Typography use="subtitle2" tag="span" >Mean:</Typography> {stats.mean}</div>
          <div><Typography use="subtitle2" tag="span" >Median:</Typography> {stats.median}</div>
          <div><Typography use="subtitle2" tag="span" >Standard deviation:</Typography> {stats.sd}</div>
          <div><Typography use="subtitle2" tag="span" >Min:</Typography> {stats.min}</div>
          <div><Typography use="subtitle2" tag="span" >Max:</Typography> {stats.max}</div>
          {/* <div>Frequency: {frequencyArr}</div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
