import React, { useRef } from 'react'
import { useOnScreen } from 'wonderhooks'

export default () => {
  const ref = useRef(null)
  const onScreen = useOnScreen(ref, true)

  return (
    <div>
      <div>
        (Scroll) Ref is {!onScreen ? 'on screen.' : 'not on screen.'}
      </div>
      <div style={{
        maxHeight: '100px',
        overflow: 'scroll',
        border: '1px solid'
      }}>
        <div style={{height: '200px'}} />
        <div ref={ref} style={{background: 'orange'}}>
          REF {onScreen ? 'on screen' : 'not visible'}
        </div>
      </div>
    </div>
  )
}
