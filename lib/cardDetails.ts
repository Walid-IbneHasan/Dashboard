import { ReactElement } from "react";
import { FiBarChart } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";
import { IconType } from "react-icons/lib";
import { RiFolderDownloadLine } from "react-icons/ri";
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { AiOutlineApple } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { GoArrowUpRight } from "react-icons/go";
import { GoArrowDownRight } from "react-icons/go";
import { CiBadgeDollar } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";

export const cardDetails = [
  {
    title: "Cost Per Unit",
    status: "Daily",
    numbers: "$17.21",
    percentage: "15%",
    value: 45,
    color: "blue-500",
  },
  {
    title: "Market Revenue",
    status: "Per Week",
    numbers: "$1875.54",
    percentage: "18.71%",
    value: 70,
    color: "blue-300",
  },
  {
    title: "Expenses",
    status: "Per Month",
    numbers: "$784.62",
    percentage: "65%",
    value: 70,
    color: "blue-500",
  },
  {
    title: "Daily Visits",
    status: "All Time",
    numbers: "115187",
    percentage: "17.8%",
    value: 95,
    color: "blue-300",
  },
];

interface StatisticsCardItem {
  title: string;
  description: string;
  icon: IconType;
  color: string;
}

export const StatisticsCardDetailsOne: StatisticsCardItem[] = [
  {
    title: "$30200",
    description: "All Earnings",
    icon: FiBarChart,
    color: "#5B6B79",
  },
  {
    title: "145",
    description: "Task",
    icon: CiCalendarDate,
    color: "#DC2626",
  },
  {
    title: "290+",
    description: "Page Views",
    icon: MdOutlineInsertPageBreak,
    color: "#2CA87F",
  },
  {
    title: "500",
    description: "Downloads",
    icon: RiFolderDownloadLine,
    color: "#4680FF",
  },
];

interface StatisticsCardItemTwo {
  title: string;
  description: string;
  icon: IconType;
  bgColor: string;
}

export const StatisticsCardDetailsTwo: StatisticsCardItemTwo[] = [
  {
    title: "1165+",
    description: "Facebook Users",
    icon: FaFacebook,
    bgColor: "#4680FF",
  },
  {
    title: "780+",
    description: "Dribble Posts",
    icon: CiBasketball,
    bgColor: "#3EC8D5", // Light pink background color
  },
  {
    title: "998+",
    description: "iOs Users",
    icon: AiOutlineApple,
    bgColor: "#3E4853", // Light purple background color
  },
  {
    title: "500",
    description: "Downloads",
    icon: AiOutlineYoutube,
    bgColor: "#DC2626", // Light green background color
  },
];

interface StatisticsCardItemThree {
  title: string;
  description: string;
  percentage: string;
  icon: IconType;
  bgColor: string;
  footer: string;
}

export const StatisticsCardDetailsThree: StatisticsCardItemThree[] = [
  {
    title: "Total Page Views",
    description: "4,42,236",
    percentage: "59.3%",
    icon: GoArrowUpRight,
    bgColor: "#4680FF",
    footer: "You made an extra 35,000 this year",
  },
  {
    title: "Total Order",
    description: "18,800",
    percentage: "70.5%",
    icon: GoArrowDownRight,
    bgColor: "#6BC2A5",
    footer: "You made an extra 1,943 this year",
  },
  {
    title: "Total Order",
    description: "18.800",
    percentage: "27.4",
    icon: GoArrowDownRight,
    bgColor: "#EDAD4D",
    footer: "You made an extra 1,943 this year",
  },
  {
    title: "Total Sales",
    description: "$35,078",
    percentage: "27.4%",
    icon: GoArrowDownRight,
    bgColor: "#DC2626",
    footer: "You made an extra $20,395 this year",
  },
];

interface StatisticsColorCardItem {
  title: string;
  number: string;
  description: string;
  icon: IconType;
  bgColorFrom: string;
  bgColorTo: string;
}

export const StatisticsColorCardDetails: StatisticsColorCardItem[] = [
  {
    title: "Revenue",
    number: "$4500",
    description: "$50,032 Last Month",
    icon: CiBadgeDollar,

    bgColorFrom: "#4680FF",
    bgColorTo: "#6293FF",
  },
  {
    title: "Orders Received",
    number: "486",
    description: "20% Increase",
    icon: IoCalendarOutline,

    bgColorFrom: "#E18800",
    bgColorTo: "#E3951D",
  },
  {
    title: "Total Sales",
    number: "1641",
    description: "%1055 Revenue Generated",
    icon: LuShoppingCart,

    bgColorFrom: "#299E78",
    bgColorTo: "#4BB592",
  },
];
