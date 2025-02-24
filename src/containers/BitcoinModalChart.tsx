import { PriceChart } from '@/components'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { ICryptoPrice } from '@/types/crypto-prices.types'

interface BitcoingModalChartProps {
  dialogTrigger: React.ReactNode
  cryptoPrices: ICryptoPrice[] | undefined
  isLoading?: boolean
}

export default function BitcoingModalChart({
  dialogTrigger,
  isLoading,
  cryptoPrices
}: BitcoingModalChartProps) {
  return (
    <div className="flex justify-center items-center h-screen">
      <Dialog>
        <DialogTrigger>{dialogTrigger}</DialogTrigger>
        <DialogContent className="max-w-96 md:max-w-[600px] overflow-x-scroll">
          <DialogHeader>
            <DialogTitle>Bitcoin Price</DialogTitle>
            <DialogDescription>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <PriceChart cryptoPrices={cryptoPrices} />
                </>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}
