import { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas';
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { LineChart } from '../LineChart';
import { ScatterChart } from '../ScatterChart';
import { ChartWrapper } from './styles';
ChartJS.register(CategoryScale, BarElement, LinearScale, PointElement, LineElement, Tooltip, Legend);

interface IMultipleScatterChart {
  best: number[],
  worst: number[],
  average: number[],
  id: string,
}

export const MultipleScatterChart = ({ best, average, worst, id }: IMultipleScatterChart) => {
  const bestRef = useRef(null)
  const worstRef = useRef(null)
  const averageRef = useRef(null)
  const { sources, setSources } = useState({
    srcBest: null,
    srcWorst: null,
    srcAverage: null,
  })

  useEffect(() => {
    if (!bestRef || !worstRef || !averageRef) return

    const fillSources = async () => {
      const bestElement = bestRef.current
      const worstElement = worstRef.current
      const averageElement = averageRef.current

      const bestCanvas = await html2canvas(bestElement)
      const worstCanvas = await html2canvas(worstElement)
      const averageCanvas = await html2canvas(averageElement)

      const data = canvas.toDataURL('image/jpeg')
      const link = document.createElement('a')

      if (typeof link.download === 'string') {
        link.href = data
        link.download = 'comprobante-coinpro.jpeg'

        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      } else {
        window.open(data)
      }
    }

    fillSources()

  }, [best, worst, average])

  if (!best || !best.length) return null
  if (!average || !average.length) return null
  if (!worst || !best.length) return null

  /*
  const data = {
    datasets: [{
      label: 'BEST',
      data: mappedBest,
      tension: 0.3,
      backgroundColor: 'green'
    },
    {
      label: 'AVERAGE',
      data: mappedAverage,
      tension: 0.3,
      backgroundColor: 'yellow'
    },
    {
      label: 'WORST',
      data: mappedWorst,
      tension: 0.3,
      backgroundColor: 'rgb(255, 99, 132)'
    }],
  }
  */


  return (
    <>
      <ChartWrapper ref={bestRef}>
        <LineChart
          values={best}
          color={'#77dd77'}
          title={`Best run: ${id}`}
        />
      </ChartWrapper>

      <ChartWrapper ref={worstRef}>
        <LineChart
          values={worst}
          color={'#ff6385'}
          title={`Worst run: ${id}`}
        />
      </ChartWrapper>

      <ChartWrapper ref={averageRef}>
        <LineChart
          values={average}
          color={'#fdfd96'}
          title={`Average run: ${id}`}
        />
      </ChartWrapper>
    </>
  )
}
