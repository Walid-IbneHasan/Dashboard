import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";

const ProfilePage = () => {
  return (
    <div className="container">
      <div className="my-5 flex justify-between font-semibold">
        <p>Settings</p>
        <p>Settings &gt;Profile</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Settings</CardTitle>
          <CardDescription>Your Profile Settings</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">General Data</p>
          <p className="text-md text-slate-500">
            Please provide general information about yourself. Don&apos;t forget
            to save
          </p>
          <p className="mt-5">Your Name</p>
          <Input />
          <p className="mt-5">Your Email</p>
          <Input />
          <p className="mt-5">Color Scheme</p>
          <Input />
          <p className="mt-5">Page Name</p>
          <Input />
          <p className="mt-5">Page Logo</p>
          <Input />
          <div className="flex gap-5 mt-5">
            <Button className="bg-emerald-500">Save</Button>
            <Button>Reset</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfilePage;
