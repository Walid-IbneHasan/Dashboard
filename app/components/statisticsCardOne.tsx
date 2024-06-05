import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactElement } from "react";
import { IconType } from "react-icons/lib";

const StatisticsCardOne = ({
  title,
  description,
  icon: Icon,
  color,
}: {
  title: string;
  description: string;
  icon: IconType;
  color: string;
}) => {
  return (
    <Card className="flex justify-between items-center">
      <CardHeader className="flex flex-col gap-2">
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-xl">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex items-center">
        <Icon size={50} color={color} />
      </CardContent>
    </Card>
  );
};

export default StatisticsCardOne;
