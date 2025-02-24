import { useEffect, useState } from 'react'
import BitcoinLogo from '../assets/Bitcoin.svg.png'
import USDIcon from '../assets/usdicon.png'
import CountdownTimer from './CoundownTimer'

interface CalculatorHeaderProps {
  btcCurrentPrice: number
}

export default function CalculatorHeader({ btcCurrentPrice }: CalculatorHeaderProps) {
  const [price, setPrice] = useState(btcCurrentPrice)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    setAnimate(true)
    setPrice(btcCurrentPrice)

    const timeout = setTimeout(() => setAnimate(false), 300)

    return () => clearTimeout(timeout)
  }, [btcCurrentPrice])

  return (
    <>
      <div className="flex items-center mb-5">
        <img src={BitcoinLogo} alt="Bitcoin Logo" className="w-8 h-8" />
        <h1 className="text-4xl">Bitcoin Calculator</h1>
      </div>
      <h4>Live price</h4>
      <div className="flex items-center mb-5">
        <img src={USDIcon} alt="Bitcoin Logo" className="w-5 h-5" />
        <h2 className="p-2 pr-4">
          <strong
            className={`text-3xl font-light transition-transform duration-300 ${
              animate ? 'scale-110 text-green-500' : ''
            }`}
          >
            {price}
          </strong>
        </h2>
        <CountdownTimer btcCurrentPrice={btcCurrentPrice} />
      </div>
    </>
  )
}
