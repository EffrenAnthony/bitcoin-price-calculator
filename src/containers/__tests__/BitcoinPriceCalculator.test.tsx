import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import BitcoinPriceCalculator from '../BitcoinPriceCalculator'

describe('BitcoinPriceCalculator', () => {
  it('should show loader when btcCurrentPrice is not provided', () => {
    render(<BitcoinPriceCalculator />)
    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })
})
