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
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Sales Overview</h5>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => `$${value}`} />
            <Bar
              dataKey="sales"
              fill="#00BFFF"
              radius={[5, 5, 0, 0]}
              label={{ position: "top", formatter: (val) => `$${val}` }}
            >
              <LabelList
                dataKey="sales"
                content={({ x, y, value, index }) =>
                  data[index].highlight ? (
                    <text
                      x={x + 10}
                      y={y - 10}
                      fill="black"
                      fontWeight="bold"
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
    </div>
  );
};

export default SalesChart;
