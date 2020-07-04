import React, { useState } from 'react'

import Header from './layout/Header'
import ExampleHolder from './layout/ExampleHolder'

import OnScreen from './components/OnScreen'
import Debounce from './components/Debounce'
import Typewriter from './components/Typewriter'

const App = () => {
  return (
    <div>
      <div className="side-area">
        <Header />
        <div className="side-toc">

        </div>
      </div>
      <div className="side-filler" />
      <div className="example-container">
        <div className="paragraph-area">
          <h1>
            &#10024;
            Wonderhooks
            &#10024;
          </h1>
          <p>
            Wonderhooks serves as a collection of custom hooks that are useful across several React projects.
          </p>
          <p>
            Forget inventing the wheel every time, let's just use the same one everywhere
            <span className="p-small">
              &nbsp;(which does work... in this scenario at least)
            </span>
          </p>
        </div>
        <ExampleHolder title="useDebounce" description="Debounce literallt lorem" Example={Debounce} />
        <ExampleHolder title="useTypewriter" description="hi" Example={Typewriter} />
        <ExampleHolder title="useOnScreen" description="hi" Example={OnScreen} />
      </div>
    </div>
  )
}

export default App
