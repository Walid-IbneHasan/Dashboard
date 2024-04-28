"use client";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Area,
} from "recharts";

const data = [
  {
    name: "A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: " B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: " C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: " D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: " E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: " F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: " G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const AreaChartComponent = () => {
  return (
    <Card className="rounded-none">
      <CardHeader>
        <CardTitle>Account Transactions</CardTitle>
        <CardDescription>Transaction period from 21 July</CardDescription>
      </CardHeader>
      <CardContent>
        <AreaChart
          width={300}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#93C5FD" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#93C5FD" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />

          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#93C5FD"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </CardContent>
    </Card>
  );
};

export default AreaChartComponent;
