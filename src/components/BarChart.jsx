import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale);

const BarChart = () => {
  const data = {
    labels: ["Prospect", "Qualified", "Proposal", "Closed"],
    datasets: [
      {
        label: "Deals",
        data: [20, 35, 15, 25],
        backgroundColor: "#1cc88a",
      },
    ],
  };

  return <Bar data={data} options={{ responsive: true, plugins: { legend: { display: false } } }} />;
};

export default BarChart;
