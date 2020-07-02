import React, { useState } from 'react'

import Header from './layout/Header'
import OnScreen from './components/OnScreen'
import Debounce from './components/Debounce'
import Typewriter from './components/Typewriter'

const App = () => {

  return (
    <div>
      <Header />
      <div className="example-container">
        <h1>useDebounce</h1>
        <Debounce />
        <h1>useTypewriter</h1>
        <Typewriter />
        <h1>useOnScreen</h1>
        <OnScreen />
      </div>
    </div>
  )
}

export default App
