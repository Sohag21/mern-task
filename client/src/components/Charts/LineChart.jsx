
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
    },
  },
};



export default function LineChart({data}) {

  const dataset = {
    labels: data?.result?.map(el=>{
      return el?._id
    }),
    datasets: [
      {
        label: 'Dataset 1',
        data:data?.result?.map(el=>{
          return el?.value
        }),

        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ],
  };

  return (
    <div className='bg-white p-2 rounded'>
      <Line options={options} data={dataset} />
    </div>
  )
}
