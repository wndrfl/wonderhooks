import React, { useState } from 'react'
import { useDebounce } from 'wonderhooks'

const App = () => {
  const [value, setValue] = useState('')
  const debounce = useDebounce(value, 2000)

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {debounce}
    </div>
  )
}
export default App
