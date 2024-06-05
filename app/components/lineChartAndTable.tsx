import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import LineChartComponent from "./lineChart";
import { DataTableDemo } from "./table";

const LineChartAndTable = () => {
  return (
    <div className="grid grid-cols-1 gap-5 mt-5 lg:grid lg:grid-cols-2 lg:gap-5">
      <Card className="rounded-none">
        <CardHeader>
          <CardTitle>Total Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChartComponent />
        </CardContent>
      </Card>

      <Card className="rounded-none">
        <CardHeader>
          <CardTitle>Top 5 Customers</CardTitle>
          <CardDescription>
            Transaction period from 21 July to 25 Aug
          </CardDescription>
        </CardHeader>
        <CardContent>
          <DataTableDemo />
        </CardContent>
      </Card>
    </div>
  );
};

export default LineChartAndTable;
