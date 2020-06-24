import React, { useState } from 'react'

import Debounce from './components/Debounce'
import Typewriter from './components/Typewriter'

const App = () => {

  return (
    <div>
      <h1>useDebounce</h1>
        <Debounce />
      <h1>useTypewriter</h1>
        <Typewriter />
    </div>
  )
}

export default App
