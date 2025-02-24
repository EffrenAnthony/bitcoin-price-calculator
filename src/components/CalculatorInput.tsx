/* eslint-disable jsx-a11y/no-autofocus */
import { DollarSignIcon } from 'lucide-react'
import { Input } from './ui/input'
import { Label } from './ui/label'

interface CalculatorInputProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

function CalculatorInput({ onChange, value }: CalculatorInputProps) {
  return (
    <>
      <Label htmlFor="usdAmount">How much BTC do you want to buy?</Label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
          <DollarSignIcon className="w-8 h-8 text-muted-foreground" />
        </div>
        <Input
          className="!text-4xl py-8 text-center"
          id="usdAmount"
          name="usdAmount"
          placeholder="USD"
          min={0}
          autoFocus
          onChange={onChange}
          value={value}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </>
  )
}

export default CalculatorInput
