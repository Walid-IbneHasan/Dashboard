import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  StatisticsCardDetailsOne,
  StatisticsCardDetailsThree,
  StatisticsColorCardDetails,
} from "@/lib/cardDetails";
import { StatisticsCardDetailsTwo } from "@/lib/cardDetails";
import StatisticsCardOne from "../components/statisticsCardOne";
import StatisticsCardTwo from "../components/statisticsCardTwo";
import StatisticsCardThree from "../components/statisticsCardThree";
import StatisticsAddFundCard from "../components/StatisticsAddFundCard";
import PremiumMembershipCard from "../components/premiumMembershipCard";
import StatisticsColorCard from "../components/statisticsColorCard";

const StatisticsPage = () => {
  return (
    <div className="mt-5 container">
      <div className="mb-5 font-semibold">Statistics</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-8">
        {StatisticsCardDetailsOne.map((item, index) => (
          <StatisticsCardOne
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            color={item.color}
          />
        ))}
        {StatisticsCardDetailsTwo.map((item, index) => (
          <StatisticsCardTwo
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            bgColor={item.bgColor}
          />
        ))}
        {StatisticsCardDetailsThree.map((item, index) => (
          <StatisticsCardThree
            key={index}
            title={item.title}
            description={item.description}
            icon={item.icon}
            bgColor={item.bgColor}
            percentage={item.percentage}
            footer={item.footer}
          />
        ))}
        <div className="xl:col-span-2">
          <StatisticsAddFundCard />
        </div>
        <div className=" xl:col-start-3 xl:col-end-5">
          <PremiumMembershipCard />
        </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 xl:gap-8 mt-8">
        {StatisticsColorCardDetails.map((item, index) => (
          <StatisticsColorCard
            key={index}
            title={item.title}
            number={item.number}
            description={item.description}
            icon={item.icon}
            bgColorFrom={item.bgColorFrom}
            bgColorTo={item.bgColorTo}
          />
        ))}
      </div>
    </div>
  );
};

export default StatisticsPage;
