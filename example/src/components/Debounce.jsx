import React, { useState } from 'react'
import { useDebounce } from 'wonderhooks'

export default () => {
  const [value, setValue] = useState('')
  const debounce = useDebounce(value, 1000)

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
