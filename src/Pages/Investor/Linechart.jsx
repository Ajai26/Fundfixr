import React from 'react';
import { Line } from 'react-chartjs-2';

const Linechart = ({ investmentData }) => {
  const chartData = {
    labels: investmentData.labels,
    datasets: [
      {
        label: 'Investment Portfolio Performance',
        data: investmentData.data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default Linechart;