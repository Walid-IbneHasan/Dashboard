import { cardDetails } from "@/lib/cardDetails";
import Navbar from "./components/navbar";
import ProgressCard from "./components/progresssCard";
import BarChartLite from "./components/barChart";
import PieChartLite from "./components/pieChart";
import AreaChartComponent from "./components/areaChart";
import LineChartComponent from "./components/lineChart";
import { DataTableDemo } from "./components/table";
import lineChartAndTable from "./components/lineChartAndTable";
import LineChartAndTable from "./components/lineChartAndTable";
import { MdArrowUpward } from "react-icons/md";
import PieChartComponent from "./components/pieChart";
import BarChartComponent from "./components/barChart";

export default function Home() {
  return (
    <>
      <div className="flex">
        <main className=" mx-auto  mt-5 container">
          <div className="flex justify-between">
            <div className="text-black font-semibold">Dashboard</div>
            <div className="font-bold">Achintya Solutions</div>
          </div>
          <div className="grid grid-col-1 w-full gap-5 sm:grid sm:grid-cols-2 sm:gap-5 lg:flex lg:gap-5">
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
          <div className=" grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
            <div>
              <BarChartComponent />
            </div>
            <div>
              <PieChartComponent />
            </div>
            <div>
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
