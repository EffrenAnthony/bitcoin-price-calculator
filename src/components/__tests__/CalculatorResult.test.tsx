import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CalculatorResult from '../CalculatorResult'

describe('CalculatorResult Component', () => {
  it('renders correctly with given props', () => {
    render(<CalculatorResult coins="1000" btcCurrentPrice={50000} />)

    const result = screen.getByText('0.0200000')
    expect(result).toBeInTheDocument()
  })

  it('handles btcCurrentPrice as undefined without crashing', () => {
    render(<CalculatorResult coins="1000" btcCurrentPrice={undefined} />)

    const result = screen.getByText('0')
    expect(result).toBeInTheDocument()
  })

  it('renders 0 when btcCurrentPrice is 0 to avoid division errors', () => {
    render(<CalculatorResult coins="1000" btcCurrentPrice={0} />)

    const result = screen.getByText('0')
    expect(result).toBeInTheDocument()
  })
})
