import { ICryptoPriceResponse } from '@/types/crypto-prices.types'
import api from '.'

export async function getCryptoPricesApi() {
  const {
    data: { data }
  } = await api.get<ICryptoPriceResponse>('/api/crypto-price')

  return data
}
