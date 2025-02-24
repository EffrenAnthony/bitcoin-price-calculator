import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import CountdownTimer from '../CoundownTimer'

describe('CountdownTimer Component', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders initial countdown value of 30', () => {
    render(<CountdownTimer btcCurrentPrice={50000} />)
    expect(screen.getByText('30')).toBeInTheDocument()
  })

  it('counts down every second', () => {
    render(<CountdownTimer btcCurrentPrice={50000} />)

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('29')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('28')).toBeInTheDocument()
  })

  it('resets to 30 when btcCurrentPrice changes', () => {
    const { rerender } = render(<CountdownTimer btcCurrentPrice={50000} />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('25')).toBeInTheDocument()

    rerender(<CountdownTimer btcCurrentPrice={51000} />)
    expect(screen.getByText('30')).toBeInTheDocument()
  })

  it('displays spinner when countdown reaches 0', () => {
    render(<CountdownTimer btcCurrentPrice={50000} />)

    act(() => {
      vi.advanceTimersByTime(30000)
    })

    expect(screen.getByTestId('spinner')).toBeInTheDocument()
  })
})
