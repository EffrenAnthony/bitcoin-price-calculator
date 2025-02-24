import { JSX } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

export default function CalculatorCard({
  children,
  title,
  description
}: {
  children: React.ReactNode
  title: React.ReactNode
  description?: string
}): JSX.Element {
  return (
    <>
      <Card className="min-w-96">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
      </Card>
    </>
  )
}
