/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import CalculatorInput from '../CalculatorInput'

describe('CalculatorInput Component', () => {
  it('renders input with correct placeholder', () => {
    render(<CalculatorInput onChange={() => {}} value="" />)

    const input = screen.getByPlaceholderText('USD')
    expect(input).toBeInTheDocument()
  })

  it('calls onChange when typing', () => {
    const handleChange = vi.fn()
    render(<CalculatorInput onChange={handleChange} value="" />)

    const input = screen.getByPlaceholderText('USD')
    fireEvent.change(input, { target: { value: '100' } })

    expect(handleChange).toHaveBeenCalledTimes(1)
  })

  it('renders with correct initial value', () => {
    render(<CalculatorInput onChange={() => {}} value="250" />)

    const input = screen.getByPlaceholderText('USD')
    expect(input).toHaveValue('250')
  })

  it('prevents click propagation', () => {
    const handleClick = vi.fn()
    render(
      <div onClick={handleClick}>
        <CalculatorInput onChange={() => {}} value="" />
      </div>
    )

    const input = screen.getByPlaceholderText('USD')
    fireEvent.click(input)

    expect(handleClick).not.toHaveBeenCalled()
  })
})
