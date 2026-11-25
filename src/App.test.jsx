import { describe, it, expect, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

describe('Counter', () => {
  beforeEach(() => localStorage.clear())

  it('increments, decrements and resets', () => {
    render(<App />)
    const value = () => screen.getByRole('status').textContent
    expect(value()).toBe('0')
    fireEvent.click(screen.getByLabelText('Increment'))
    fireEvent.click(screen.getByLabelText('Increment'))
    expect(value()).toBe('2')
    fireEvent.click(screen.getByLabelText('Decrement'))
    expect(value()).toBe('1')
    fireEvent.click(screen.getByText('Reset'))
    expect(value()).toBe('0')
  })
})
