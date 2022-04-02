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
ChartJS.register(CategoryScale, BarElement, LinearScale, PointElement, LineElement, Tooltip, Legend);

interface IMultipleScatterChart {
  best: number[],
  worst: number[],
  average: number[],
  id: string,
}

export const MultipleScatterChart = ({ best, average, worst, id }: IMultipleScatterChart) => {
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
      
      <LineChart
        values={best}
        color={'#77dd77'}
        title={`Best run: ${id}`}
      />
      <LineChart
        values={worst}
        color={'#ff6385'}
        title={`Worst run: ${id}`}
      />
      <LineChart
        values={average}
        color={'#fdfd96'}
        title={`Average run: ${id}`}
      />
      {/*
      <ScatterChart
        values={best}
        color={'#77dd77'}
        title={`Best run: ${id}`}
      />
      <ScatterChart
        values={worst}
        color={'#ff6385'}
        title={`Worst run: ${id}`}
      />
      <ScatterChart
        values={average}
        color={'#fdfd96'}
        title={`Average run: ${id}`}
      />
      */}
    </>
  )
}
