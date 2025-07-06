import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const AreaChart = () => {
  const data = {
    labels: ["SEO", "Email", "Social", "Referral"],
    datasets: [
      {
        label: "Leads",
        data: [50, 40, 70, 30],
        borderColor: "#36b9cc",
        backgroundColor: "rgba(54, 185, 204, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  return <Line data={data} options={{ responsive: true, plugins: { legend: { display: false } } }} />;
};

export default AreaChart;
