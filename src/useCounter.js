import { useCallback, useEffect, useState } from 'react'

const KEY = 'counter:value'

function readStored() {
  try {
    return Number(localStorage.getItem(KEY)) || 0
  } catch {
    return 0
  }
}

export function useCounter() {
  const [count, setCount] = useState(readStored)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, String(count))
    } catch {
      /* storage unavailable: keep it in memory */
    }
  }, [count])

  const increment = useCallback(() => setCount((n) => n + 1), [])
  const decrement = useCallback(() => setCount((n) => n - 1), [])
  const reset = useCallback(() => setCount(0), [])

  return { count, increment, decrement, reset }
}
