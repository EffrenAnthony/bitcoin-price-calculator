export interface ICryptoPrice {
  id: number
  name: string
  symbol: string
  price: number
  createdAt: string
  updatedAt: string
}

export interface ICryptoPriceResponse {
  data: ICryptoPrice[]
}
