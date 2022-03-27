import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
  animation: false,
  bezierCurve : false,
  plugins: {
    tooltip: {
      enabled: false
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
  }
};

export const MultipleScatterChart = ({ best, average, worst }) => {
  if (!best || !best.length) return null
  if (!average || !average.length) return null
  if (!worst || !best.length) return null

  const mappedBest = best.map((elem, index) => {
    return { x: index, y: elem }
  })
  const mappedAverage = average.map((elem, index) => {
    return { x: index, y: elem }
  })
  const mappedWorst = worst.map((elem, index) => {
    return { x: index, y: elem }
  })

  const data = {
    datasets: [{
      label: 'BEST',
      data: mappedBest,
      backgroundColor: 'green'
    },
    {
      label: 'AVERAGE',
      data: mappedAverage,
      backgroundColor: 'yellow'
    },
    {
      label: 'WORST',
      data: mappedWorst,
      backgroundColor: 'rgb(255, 99, 132)'
    },
  ],
  }

  return (
    <Scatter
      style={{backgroundColor: 'white',maxWidth:'600px', maxHeight:'400px'}}
      options={options}
      data={data}
    />
  )
}
