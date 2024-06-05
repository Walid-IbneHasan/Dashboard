import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { IconType } from "react-icons/lib";

const StatisticsCardThree = ({
  title,
  description,
  icon: Icon,
  bgColor,
  percentage,
  footer,
}: {
  title: string;
  description: string;
  icon: IconType;
  bgColor: string;
  percentage: string;
  footer: string;
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-col gap-2">
        <CardTitle className="text-md text-slate-500">{title}</CardTitle>
        <div className="flex gap-2 items-center">
          <span className="text-xl text-black">{description}</span>
          <div
            className="flex gap-2 items-center px-2 py-1 rounded-lg bg-opacity-30 border"
            style={{
              backgroundColor: `${bgColor}33`,
              borderColor: bgColor,
            }}
          >
            <div>
              <Icon color={bgColor} />
            </div>
            <div style={{ color: bgColor }}>{percentage}</div>
          </div>
        </div>
      </CardHeader>
      <CardFooter className="text-slate-500 text-sm">{footer}</CardFooter>
    </Card>
  );
};

export default StatisticsCardThree;
