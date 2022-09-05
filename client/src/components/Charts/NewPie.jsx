import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const NewPie = ({data}) => {
    const dataset = {
        labels: data?.result?.map(label=>{return label?._id}),
        datasets: [
          {
            data: data?.result?.map(val=>{return val?.value}),
            backgroundColor: [
              'rgba(255, 99, 132, 0.7)',
              'rgba(54, 162, 235, 0.7)',
              'rgba(153, 102, 255, 0.7)'
            ],
            borderColor: [
              'rgba(255, 150, 132, 1)',
              'rgba(154, 162, 235, 1)',
              'rgba(180, 152, 255, 1)'
            ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <div>
        <Pie data={dataset} />
    </div>
  )
}

export default NewPie