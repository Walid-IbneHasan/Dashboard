"use client";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const data = [
  {
    name: " A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: " C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: " D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: " E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: " F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: " G",
    uv: 3490,
    pv: 4300,
  },
];

const BarChartLite = () => {
  return (
    <BarChart width={500} height={250} data={data} barCategoryGap={50}>
      <CartesianGrid vertical={false} strokeDasharray="3 3" />
      <XAxis dataKey="name" axisLine={false} />
      <YAxis axisLine={false} />
      <Tooltip />

      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#93C5FD" />
    </BarChart>
  );
};

export default BarChartLite;
