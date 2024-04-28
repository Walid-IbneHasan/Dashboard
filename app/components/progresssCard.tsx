"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MdArrowUpward } from "react-icons/md";
import { Progress } from "@/components/ui/progress";
import ProgressBar from "@ramonak/react-progress-bar";

const ProgressCard = ({
  title,
  status,
  numbers,
  percentage,
  value,
  color,
}: {
  title: string;
  status: string;
  numbers: string;
  percentage: string;
  value: number;
  color: string;
}) => {
  return (
    <Card className="w-[380px] h-[180px] mt-5 rounded-none ">
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="py-1 px-2 rounded-none bg-blue-300 text-blue-900">
          {status}
        </CardDescription>
      </CardHeader>
      <div className="flex justify-between">
        <CardContent>
          <h1 className="font-bold text-xl">{numbers}</h1>
        </CardContent>
        <CardContent className="flex space-x-3 items-center">
          {percentage}{" "}
          <span>
            <MdArrowUpward />{" "}
          </span>{" "}
        </CardContent>
      </div>

      <CardFooter>
        {/* <Progress  value={value} color={color} /> */}
        <Progress value={value} color={`bg-${color}`} />
      </CardFooter>
    </Card>
  );
};

export default ProgressCard;
