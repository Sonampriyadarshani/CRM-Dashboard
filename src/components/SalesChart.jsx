import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LabelList,
} from "recharts";

const data = [
  { month: "Jan", sales: 25 },
  { month: "Feb", sales: 30 },
  { month: "Mar", sales: 35 },
  { month: "Apr", sales: 37.97, highlight: true },
  { month: "May", sales: 28 },
  { month: "Jun", sales: 45 },
  { month: "Jul", sales: 36 },
  { month: "Aug", sales: 22 },
];

const SalesChart = () => {
  return (
    <div className="card-custom mb-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(value) => `$${value}`} />
          <Bar
            dataKey="sales"
            fill="#4f46e5" /* Indigo like your dashboard */
            radius={[6, 6, 0, 0]}
          >
            <LabelList
              dataKey="sales"
              content={({ x, y, value, index }) =>
                data[index].highlight ? (
                  <text
                    x={x + 10}
                    y={y - 10}
                    fill="#000"
                    fontWeight="bold"
                    fontSize={12}
                  >
                    Sale: ${value}
                  </text>
                ) : null
              }
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
