import { useEffect } from 'react'
import { useCounter } from './useCounter'

export default function App() {
  const { count, increment, decrement, reset } = useCounter()

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowUp' || e.key === '+') increment()
      else if (e.key === 'ArrowDown' || e.key === '-') decrement()
      else if (e.key === '0' || e.key === 'Escape') reset()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [increment, decrement, reset])

  const tone = count > 0 ? 'positive' : count < 0 ? 'negative' : 'zero'

  return (
    <main className="card">
      <h1>Counter</h1>
      <output className={`value ${tone}`} aria-live="polite" key={count}>
        {count}
      </output>
      <div className="actions">
        <button className="btn minus" onClick={decrement} aria-label="Decrement">−</button>
        <button className="btn reset" onClick={reset}>Reset</button>
        <button className="btn plus" onClick={increment} aria-label="Increment">+</button>
      </div>
      <p className="hint">
        <kbd>↑</kbd> / <kbd>↓</kbd> to change · <kbd>0</kbd> to reset
      </p>
    </main>
  )
}
