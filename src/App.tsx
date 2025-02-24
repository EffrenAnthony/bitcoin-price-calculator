// import { useState } from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import { BitcoinPriceCalculator } from './containers'
import { io } from 'socket.io-client'
import { ICryptoPrice } from './types/crypto-prices.types'
import BitcoingModalChart from './containers/BitcoinModalChart'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getCryptoPricesApi } from './api/crypto-price'

const SOCKET_URL = import.meta.env.VITE_API_BASE_URL

function App() {
  const [updatedBTCPrice, setUpdatedBTCPrice] = useState<ICryptoPrice>()
  const queryClient = useQueryClient()

  const {
    data: bitcoinPrices,
    isLoading,
    isSuccess
  } = useQuery({
    queryKey: ['crypto-prices'],
    queryFn: getCryptoPricesApi
  })

  useEffect(() => {
    const socket = io(SOCKET_URL)
    socket.on('onCreateCryptoMessage', (message: ICryptoPrice) => {
      queryClient.invalidateQueries({ queryKey: ['crypto-prices'] })
      setUpdatedBTCPrice(message)
    })
    return () => {
      socket.disconnect()
    }
  }, [])
  useEffect(() => {
    if (isSuccess) {
      setUpdatedBTCPrice(bitcoinPrices?.[0])
    }
  }, [isSuccess])

  return (
    <>
      <BitcoingModalChart
        cryptoPrices={bitcoinPrices}
        isLoading={isLoading}
        dialogTrigger={<BitcoinPriceCalculator btcCurrentPrice={updatedBTCPrice?.price} />}
      />
    </>
  )
}

export default App
