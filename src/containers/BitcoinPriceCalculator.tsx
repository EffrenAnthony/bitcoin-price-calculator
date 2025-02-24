import React from 'react'
import {
  CalculatorCard,
  CalculatorHeader,
  CalculatorInput,
  CalculatorResultProps
} from '@/components'
import { Loader2 } from 'lucide-react'

interface BitcoinPriceCalculatorProps {
  btcCurrentPrice?: number
}

export default function BitcoinPriceCalculator({ btcCurrentPrice }: BitcoinPriceCalculatorProps) {
  const [coins, setCoins] = React.useState<string | null>(null)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(Number(e.target.value))) return
    setCoins(e.target.value)
  }
  return (
    <div>
      <CalculatorCard
        title={
          <div className="flex flex-col items-center">
            {btcCurrentPrice ? (
              <CalculatorHeader btcCurrentPrice={btcCurrentPrice} />
            ) : (
              <Loader2 className="animate-spin" data-testid="loader" />
            )}
          </div>
        }
      >
        <CalculatorInput value={coins as string} onChange={handleChange} />
        <CalculatorResultProps coins={coins} btcCurrentPrice={btcCurrentPrice} />
      </CalculatorCard>
    </div>
  )
}
