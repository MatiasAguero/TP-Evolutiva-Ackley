import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

const options = {
  animation: false,
  plugins: {
    tooltip: {
      enabled: false
    },
    legend: {
      display: true,
    },
  },
  scales: {
    x: {
      beginAtZero: true,
    },
  }
};


export const LineChart = ({ values, color, title,id }) => {
  if (!values || !values.length) return null

  const labels = values.map((elem, index) => index)

  const data = {
    datasets: [{
      label: title,
      data: values,
      backgroundColor: color,
      pointRadius: 0,
      borderColor: color,
      tension: 0.3,
    }],
    labels,
  }

  return (
    <Line
      id={id}
      style={{backgroundColor: 'white',maxWidth:'600px', maxHeight:'400px'}}
      options={options}
      data={data}
    />
  )
}
