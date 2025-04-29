import { useTheme } from 'styled-components'
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Bar } from 'react-chartjs-2'
import { CustomChartProps } from '@/types'

Chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  PointElement,
  Legend
)

function CustomChart(props: CustomChartProps) {
  const { data, labels, type } = props
  const theme = useTheme()
  const options = {
    reponsive: true,
    scaleShowVerticalLines: false,
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: theme.typographies.subtitle,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          display: false,
          color: theme.appDefaultStroke,
        },
        ticks: {
          color: theme.typographies.subtitle,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  }

  const chartData = {
    labels,
    datasets: [
      {
        data: data,
        borderColor: 'rgb(12,112,242)',
        backgroundColor: 'rgba(12,112,242,0.5)',
      },
    ],
  }
  return type === 'bar' ? (
    <Bar options={options} data={chartData} />
  ) : (
    <Line options={options} data={chartData} />
  )
}

export default CustomChart
