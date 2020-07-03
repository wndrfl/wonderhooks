import React, { useState } from 'react'

import Header from './layout/Header'
import OnScreen from './components/OnScreen'
import Debounce from './components/Debounce'
import Typewriter from './components/Typewriter'

const ExampleHolder = ({ title, description, Example }) => (
  <div className="example-holder">
    <div className="example-left">
      <h1>{title}</h1>
      <div>{description}</div>
    </div>
    <div className="example-right">
      <Example />
    </div>
  </div>
)

const App = () => {
  return (
    <div>
      <Header />
      <div className="example-container">
        <ExampleHolder title="useDebounce" description="Debounce literallt lorem" Example={Debounce} />
        <ExampleHolder title="useTypewriter" description="hi" Example={Typewriter} />
        <ExampleHolder title="useOnScreen" description="hi" Example={OnScreen} />
      </div>
    </div>
  )
}

export default App
