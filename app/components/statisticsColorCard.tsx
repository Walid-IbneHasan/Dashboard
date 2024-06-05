import { Card } from "@/components/ui/card";

import { IconType } from "react-icons/lib";

const StatisticsColorCard = ({
  title,
  description,
  number,
  icon: Icon,
  bgColorFrom,
  bgColorTo,
}: {
  title: string;
  description: string;
  number: string;
  icon: IconType;
  bgColorFrom: string;
  bgColorTo: string;
}) => {
  const cardStyle = {
    background: `linear-gradient(to right, ${bgColorFrom}, ${bgColorTo})`,
    padding: "1.25rem",
  };
  return (
    <Card style={cardStyle}>
      <div className="flex justify-between items-center">
        <div>
          <Icon size={50} color="white" />
        </div>

        <div className="flex flex-col gap-1 items-end font-semibold">
          <div className="text-slate-100 text-xl">{title}</div>
          <div className="text-slate-100 text-xl">{number}</div>
          <div className="text-slate-100 text-xl">{description}</div>
        </div>
      </div>
    </Card>
  );
};

export default StatisticsColorCard;
