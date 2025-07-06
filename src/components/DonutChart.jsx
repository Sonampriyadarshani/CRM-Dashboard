import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["Negotiation", "Review", "Closed"],
    datasets: [
      {
        data: [30, 20, 50],
        backgroundColor: ["#f6c23e", "#e74a3b", "#36b9cc"],
        hoverOffset: 4,
      },
    ],
  };

  return <Doughnut data={data} options={{ responsive: true }} />;
};

export default DonutChart;
