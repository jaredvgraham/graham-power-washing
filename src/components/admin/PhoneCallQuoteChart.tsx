import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface PhoneCallQuoteChartProps {
  phoneCalls: number;
  quoteCount: number;
}

const PhoneCallQuoteChart = ({
  phoneCalls,
  quoteCount,
}: PhoneCallQuoteChartProps) => {
  const data = {
    labels: [`Phone Calls: ${phoneCalls}`, `Quotes: ${quoteCount}`],
    datasets: [
      {
        label: "Phone Calls and Quotes",
        data: [phoneCalls, quoteCount],
        backgroundColor: ["#4CAF50", "#FFCE56"],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          font: {
            size: 14, // Adjust the font size for legend labels
          },
        },
      },
      title: {
        display: true,
        text: "Phone Calls and Quotes Count",
        font: {
          size: 18, // Adjust the font size for the title
        },
      },
      tooltip: {
        titleFont: {
          size: 16, // Adjust the font size for the tooltip title
        },
        bodyFont: {
          size: 14, // Adjust the font size for the tooltip body
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            size: 14, // Adjust the font size for x-axis labels
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 14, // Adjust the font size for y-axis labels
          },
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default PhoneCallQuoteChart;
