import * as React from 'react'

export const useDebounce = (value, delay) => {
  // State and setters for debounced value
  const [debouncedValue, setDebouncedValue] = React.useState(value)

  React.useEffect(
    () => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)

      // Cancel the timeout if value changes (also on delay change or unmount)
      // This is how we prevent debounced value from updating if value is changed ...
      // .. within the delay period. Timeout gets cleared and restarted.
      return () => {
        clearTimeout(handler)
      }
    },
    [value, delay] // Only re-call effect if value or delay changes
  )

  return debouncedValue
}

export const useTypewriter = (str, delay = 0) => {
  const [writtenWord, setWrittenWord] = React.useState('')

  /*
    Recursively adds a letter to the returned string until there are no more
    letters to add
  */
  const typeWord = (current, full, index) => {
    if (current !== full) {
      setTimeout(() => {
        typeWord(full.substring(0, index + 1), full, index + 1)
        setWrittenWord(full.substring(0, index + 1))
      }, Math.round(Math.random() * 100)) // This 'humanizes' the typing
    }
  }

  React.useEffect(() => {
    if (writtenWord !== str) {
      setTimeout(() => {
        // Begin recursively adding letters
        typeWord(writtenWord, str, 0)
      }, delay)
    }
  }, [str])

  if (writtenWord !== str) {
    // This fakes the cursor effect when typewriter is "typing"
    return `${writtenWord}|`
  }
  return writtenWord
}
