import { cardDetails } from "@/lib/cardDetails";
import Navbar from "./components/navbar";
import ProgressCard from "./components/progresssCard";
import BarAndPieChart from "./components/barAndPieChart";
import BarChartLite from "./components/barChart";
import PieChartLite from "./components/pieChart";
import AreaChartComponent from "./components/areaChart";
import LineChartComponent from "./components/lineChart";
import { DataTableDemo } from "./components/table";
import lineChartAndTable from "./components/lineChartAndTable";
import LineChartAndTable from "./components/lineChartAndTable";
import { MdArrowUpward } from "react-icons/md";

export default function Home() {
  return (
    <>
      <div className="flex">
        <main className=" mx-auto  mt-5 container">
          <div className="flex justify-between">
            <div className="text-black font-semibold">Dashboard</div>
            <div className="font-bold">Achintya Solutions</div>
          </div>
          <div className="flex space-x-5">
            {cardDetails.map((card, index) => (
              <ProgressCard
                key={index}
                title={card.title}
                status={card.status}
                numbers={card.numbers}
                percentage={card.percentage}
                value={card.value}
                color={card.color}
              />
            ))}
          </div>
          <div className="grid grid-cols-4 gap-5 mt-5">
            <div className="col-span-3">
              <BarAndPieChart />
            </div>
            <div className="col-span-1">
              <AreaChartComponent />
            </div>
          </div>
          <div>
            <LineChartAndTable />
          </div>
        </main>
      </div>
    </>
  );
}
