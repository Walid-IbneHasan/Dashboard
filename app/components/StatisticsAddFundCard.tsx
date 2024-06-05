import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { MdArrowUpward } from "react-icons/md";
import { Button } from "@/components/ui/button";
import React, { createContext } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import Image from "next/image";

const StatisticsAddFundCard = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Add Fund</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center flex-col gap-3">
        <p className="text-lg text-slate-600">Amount</p>
        <p className="text-xl text-black">$100</p>
        <div className="flex gap-2">
          <div className="px-2 py-1 border rounded-lg">$100</div>
          <div className="px-2 py-1 border rounded-lg">$150</div>
          <div className="px-2 py-1 border rounded-lg">$200</div>
          <div className="px-2 py-1 border rounded-lg">$250</div>
        </div>
        <Card className="mt-2 rounded-lg flex justify-between w-full items-center">
          <div className="flex gap-2 items-center">
            <Image
              src="/—Pngtree—circuit logo template vector_4018325.png"
              alt="Avatar pic"
              width={100}
              height={100}
            />
            <div className="flex flex-col ">
              <p className="text-semibold text-lg">Able Pro</p>
              <p className="text-sm">@ableprodevelop</p>
            </div>
          </div>
          <div>
            <Select>
              <SelectTrigger className="border-none ">
                <MdArrowUpward />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="disable">Disable</SelectItem>
                <SelectItem value="remove">Remove</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>
        <Button className="my-2 bg-blue-500 text-white hover:bg-blue-700 rounded-md w-full">
          Confirm
        </Button>
      </CardContent>
    </Card>
  );
};

export default StatisticsAddFundCard;
