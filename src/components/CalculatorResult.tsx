interface CalculatorResultProps {
  coins: string | null
  btcCurrentPrice: number | undefined
}

export default function CalculatorResult({ coins, btcCurrentPrice }: CalculatorResultProps) {
  const btcAmount =
    btcCurrentPrice && btcCurrentPrice > 0 ? (Number(coins) / btcCurrentPrice).toFixed(7) : '0'

  return (
    <div className="mt-7">
      <h4>Amount of BTC</h4>
      <h2>
        <strong className="text-3xl">{btcAmount}</strong>
      </h2>
    </div>
  )
}
