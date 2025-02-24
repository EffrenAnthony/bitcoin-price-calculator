import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TestButton from '.'

describe('TestButton Component', () => {
  it('renders the button with correct text', () => {
    render(<TestButton />)

    const button = screen.getByRole('button', { name: /TestButton/i })
    expect(button).toBeDefined()
  })
})
