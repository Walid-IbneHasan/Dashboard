import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BarChartLite from "./barChart";
import PieChartLite from "./pieChart";
import RenderBarChart from "./barChart";
import BarChartComponent from "./barChart";
import PieChartComponent from "./pieChart";

const BarAndPieChart = () => {
  return (
    <div>
      <Card className="rounded-none ">
        <div className="flex justify-between space-x-5">
          <div>
            <CardHeader>
              <CardTitle>Sales Analytics</CardTitle>
              <CardDescription>From Date of 1st Jan 2024</CardDescription>
            </CardHeader>
            <CardContent>
              <BarChartComponent />
            </CardContent>
          </div>
          <div>
            <CardHeader className="flex justify-end ml-20">
              <CardTitle>Stock</CardTitle>
              <CardDescription>Recent Stock</CardDescription>
            </CardHeader>{" "}
            <CardContent>
              <PieChartComponent />
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BarAndPieChart;
