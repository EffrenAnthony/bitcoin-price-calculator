/* eslint-disable react/button-has-type */
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { ICryptoPrice } from '@/types/crypto-prices.types'
import BitcoingModalChart from '../BitcoinModalChart'

describe('BitcoingModalChart', () => {
  const mockCryptoPrices: ICryptoPrice[] = [
    {
      id: 1,
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 50000,
      createdAt: '2024-02-23T12:00:00Z',
      updatedAt: '2024-02-23T12:05:00Z'
    },
    {
      id: 2,
      name: 'Ethereum',
      symbol: 'ETH',
      price: 3200,
      createdAt: '2024-02-23T12:10:00Z',
      updatedAt: '2024-02-23T12:15:00Z'
    }
  ]

  it('should not display the dialog by default', () => {
    render(
      <BitcoingModalChart dialogTrigger={<button>Open</button>} cryptoPrices={mockCryptoPrices} />
    )

    expect(screen.queryByText('Bitcoin Price')).not.toBeInTheDocument()
  })

  it('should open the dialog when clicking the trigger', () => {
    render(
      <BitcoingModalChart dialogTrigger={<button>Open</button>} cryptoPrices={mockCryptoPrices} />
    )

    fireEvent.click(screen.getByText('Open'))

    expect(screen.getByText('Bitcoin Price')).toBeInTheDocument()
  })

  it('should display "Loading..." when isLoading is true', () => {
    render(
      <BitcoingModalChart
        dialogTrigger={<button>Open</button>}
        cryptoPrices={mockCryptoPrices}
        isLoading
      />
    )

    fireEvent.click(screen.getByText('Open'))

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })
})
