import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';

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

export const ScatterChart = ({ values, color, title,id }) => {
  if (!values || !values.length) return null

  const mappedValues = values.map((elem, index) => {
    return { x: index, y: elem }
  })

  const data = {
    datasets: [{
      label: title,
      data: mappedValues,
      backgroundColor: color
    }],
  }

  return (
    <Scatter
      id={id}
      style={{backgroundColor: 'white',maxWidth:'600px', maxHeight:'400px'}}
      options={options}
      data={data}
    />
  )
}
