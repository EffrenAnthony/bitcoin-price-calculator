import { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'

interface CountdownTimerProps {
  btcCurrentPrice: number
}

export default function CountdownTimer({ btcCurrentPrice }: CountdownTimerProps) {
  const [time, setTime] = useState(30)

  useEffect(() => {
    setTime(30)
  }, [btcCurrentPrice])

  useEffect(() => {
    if (time <= 0) return

    const interval = setInterval(() => {
      setTime((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [time])

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <div className="flex items-center justify-center w-10 h-10 border rounded-full">
            {time > 0 ? (
              <span
                className={`text-lg font-bold transition-all duration-300 ease-in-out ${
                  time % 2 === 0 ? 'scale-110 text-red-500' : 'scale-100 text-black'
                }`}
              >
                {time}
              </span>
            ) : (
              <Loader2 className="animate-spin text-red-500" data-testid="spinner" />
            )}
          </div>
        </TooltipTrigger>
        <TooltipContent>
          <p>Price will be updated</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
