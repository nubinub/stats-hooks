# stats-hooks

> Library of react hooks for statistics purpose.

[![NPM](https://img.shields.io/npm/v/stats-hooks.svg)](https://www.npmjs.com/package/stats-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save stats-hooks
```

## Usage

```jsx
import React, { Component } from 'react'

import useStats from 'stats-hooks'

class Example extends Component {
  const {data, values, sorted, sum, min, max, mean, median, sd} = useStats([1, 3, 2]);

  // data : [1, 3, 2]
  // values : [1, 3, 2]
  // sorted : [1, 2, 3]
  // sum : 6
  // min : 1
  // max : 3
  // mean : 2
  // median : 2
  // sd : 0.816496580927726
}
```

## License

MIT © [nubinub](https://github.com/nubinub)
