import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { CiUnlock } from "react-icons/ci";

const PremiumMembershipCard = () => {
  return (
    <Card className=" bg-blue-500 bg-opacity-10">
      <div className="flex flex-col gap-5 m-5 items-center ">
        <div className="p-5 bg-blue-500/70 rounded-lg mt-3">
          <CiUnlock size={80} color="white" />
        </div>
        <CardTitle> Unlock All Features</CardTitle>
        <CardDescription className="ml-8">
          Enjoy all the premium features available that will make your life so
          smooth and easy. Upgrade to premium and unlock exclusive access to
          advanced tools and personalized support. Transform your workflow and
          achieve more with our premium plan.
        </CardDescription>
        <Button className="my-5 flex items-center justify-center bg-blue-500 w-full text-white  hover:bg-blue-700 rounded-lg">
          {" "}
          Upgrade to premium
        </Button>
      </div>
    </Card>
  );
};

export default PremiumMembershipCard;
