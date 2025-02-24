import { ICryptoPrice } from '@/types/crypto-prices.types'
import moment from 'moment'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

interface PriceChartProps {
  cryptoPrices: ICryptoPrice[] | undefined
}

export default function PriceChart({ cryptoPrices }: PriceChartProps) {
  const sortedPrices = cryptoPrices?.sort((a, b) => {
    return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  })
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      title: {
        display: true,
        text: 'Bitcoin Price Line Chart'
      }
    }
  }
  const data = {
    labels:
      sortedPrices?.map((cryptoPrice) => {
        const date = moment(cryptoPrice.createdAt)
        return date.format('HH:mm - DD MMM')
      }) || [],
    datasets: [
      {
        label: 'Bitcoin',
        data: sortedPrices?.map((cryptoPrice) => cryptoPrice.price) || [],
        borderColor: 'rgb(254, 191, 29)',
        backgroundColor: 'rgba(254, 191, 29, 0.5)'
      }
    ]
  }
  return <Line options={options} data={data} />
}
