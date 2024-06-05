import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import React from "react";
import { IconType } from "react-icons/lib";

const StatisticsCardTwo = ({
  title,
  description,
  icon: Icon,
  bgColor,
}: {
  title: string;
  description: string;
  icon: IconType;
  bgColor: string;
}) => {
  return (
    <Card
      className="flex justify-between items-center"
      style={{ backgroundColor: bgColor }}
    >
      <CardHeader className="flex flex-col gap-2">
        <CardTitle className="text-white text-2xl">{title}</CardTitle>
        <CardDescription className="text-white text-xl">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Icon
          className=" opacity-40 hover:opacity-100 transition-opacity"
          size={60}
          color="white"
        />
      </CardContent>
    </Card>
  );
};

export default StatisticsCardTwo;
