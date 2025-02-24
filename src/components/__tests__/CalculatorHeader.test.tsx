import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vitest } from 'vitest'
import CalculatorHeader from '../CalculatorHeader'

describe('CalculatorHeader Component', () => {
  it('renders correctly with initial btcCurrentPrice', () => {
    render(<CalculatorHeader btcCurrentPrice={50000} />)

    expect(screen.getByText('Bitcoin Calculator')).toBeInTheDocument()
    expect(screen.getByText('Live price')).toBeInTheDocument()
    expect(screen.getByText('50000')).toBeInTheDocument()
  })

  it('updates btcCurrentPrice and triggers animation', () => {
    vitest.useFakeTimers()

    const { rerender } = render(<CalculatorHeader btcCurrentPrice={50000} />)

    act(() => {
      rerender(<CalculatorHeader btcCurrentPrice={50500} />)
      vitest.advanceTimersByTime(100)
    })

    expect(screen.getByText('50500')).toHaveClass('scale-110 text-green-500')

    act(() => {
      vitest.advanceTimersByTime(300)
    })

    expect(screen.getByText('50500')).not.toHaveClass('scale-110 text-green-500')

    vitest.useRealTimers()
  })
})
