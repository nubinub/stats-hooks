# stats-hooks

> Library of react hooks for statistics purpose.

[![NPM](https://img.shields.io/npm/v/stats-hooks.svg)](https://www.npmjs.com/package/stats-hooks)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![GitHub Actions status | nubinub/stats-hooks](https://github.com/nubinub/stats-hooks/workflows/Node%20CI/badge.svg?branch=master)](https://github.com/nubinub/stats-hooks/actions?workflow=Node+CI)

## Install

```bash
npm install --save stats-hooks
```

## Usage

```jsx
import React, { Component } from 'react'

import { useStats, useFrequency } from 'stats-hooks'

const App = () => {
  const {data, values, ascending, descending, sum, min, max, mean, median, sd} = useStats([1, 3, 2]);
  // data : [1, 3, 2]
  // values : [1, 3, 2]
  // ascending : [1, 2, 3]
  // descending : [3, 2, 1]
  // sum : 6
  // min : 1
  // max : 3
  // mean : 2
  // median : 2
  // sd : 0.816496580927726

  const intervals = useFrequency([1, 23, 22], 10);
  // {lowerBound: 0, upperBound: 10, n: 1}, {lowerBound: 10, upperBound: 20, n: 0}, {lowerBound: 20, upperBound: 30, n: 2}
}
```

## License

MIT © [nubinub](https://github.com/nubinub)
