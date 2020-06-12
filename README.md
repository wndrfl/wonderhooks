# wonderhooks

> Useful Hooks developed and integrated by Wonderful

[![NPM](https://img.shields.io/npm/v/wonderhooks.svg)](https://www.npmjs.com/package/wonderhooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add wonderhooks
```

## Usage

### useDebounce
The debounce function delays the processing of the keyup event until the user has stopped typing for a set amount of time. This drastically reduces the number of automatic API calls sent to your server.

```jsx
import React, { useState, useEffect } from 'react';
import { useDebounce } from 'wonderhooks';

const App = () => {
  const [value, setValue] = useState('')
  const debounce = useDebounce(value, 2000)

  useEffect(() => {
    // Called once value updates
  }, debounce);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  )
}
```

## License

MIT © [Wonderful](https://github.com/wndrfl)
