import React, { useState } from 'react'
import { useTypewriter } from 'wonderhooks'

export default () => {
  const word = useTypewriter('Hello! Welcome to my example', 1000);

  return (
    <div>
      {word}
    </div>
  )
}
