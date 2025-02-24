import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import CalculatorCard from '../CalculatorCard'

describe('CalculatorCard Component', () => {
  it('renders title, description, and children correctly', () => {
    render(
      <CalculatorCard title="Bitcoin Calculator" description="Live price updates">
        <p>Content inside the card</p>
      </CalculatorCard>
    )

    expect(screen.getByText('Bitcoin Calculator')).toBeInTheDocument()

    expect(screen.getByText('Live price updates')).toBeInTheDocument()

    expect(screen.getByText('Content inside the card')).toBeInTheDocument()
  })

  it('renders without description', () => {
    render(
      <CalculatorCard title="No Description Card">
        <p>Some content</p>
      </CalculatorCard>
    )

    expect(screen.getByText('No Description Card')).toBeInTheDocument()

    expect(screen.getByText('Some content')).toBeInTheDocument()

    expect(screen.queryByText('Live price updates')).not.toBeInTheDocument()
  })
})
