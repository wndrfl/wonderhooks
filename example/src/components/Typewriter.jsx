import React, { useState } from 'react'
import { useTypewriter } from 'wonderhooks'

export default () => {
  const words = 'Jack and Jill went up the hill To fetch a pail of water Jack fell down and broke his crown And Jill came tumbling after Jack got up, and home did trot As fast as he could caper To old Dame Dob, who patched his nob With vinegar and brown paper'
  const word = useTypewriter(words, 1000);

  return (
    <div>
      {word}
    </div>
  )
}
