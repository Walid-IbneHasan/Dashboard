"use client";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const FormsPeople = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div className="container">
      <div className="my-5 flex justify-between font-semibold">
        <p>Forms</p>
        <p>Forms &gt; People</p>
      </div>
      <Card>
        <CardHeader className="border-b border-slate-200">
          <CardTitle>Add People Form</CardTitle>
        </CardHeader>
        <CardContent className="mt-5">
          <CardTitle className="mb-8">
            <span className="border-b-2 pb-2 border-black">Peop</span>le
            Information
          </CardTitle>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="flex flex-col gap-1">
              <Label htmlFor="fname" className="flex-nowrap">
                Name
              </Label>
              <Input
                id="fname"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="lname">Surname</Label>
              <Input
                id="lname"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="class">Class</Label>
              <Input
                id="class"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="section">Section</Label>
              <Input
                id="section"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="gender">Gender</Label>
              <Input
                id="gender"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="dob">Date of Birth</Label>
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                className="p-1 border-l-red-500 border-l-2 rounded-none border w-full"
                placeholderText="Select date"
                id="dob"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="rollnumber">Roll Number</Label>
              <Input
                id="rollnumber"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="admissionnumber">Admission Number</Label>
              <Input
                id="admissionnumber"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="religion">Religion</Label>
              <Input
                id="religion"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="avatar">Avatar</Label>
              <Input
                id="avatar"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
          </div>
          <CardTitle className="my-8">
            <span className="border-b-2 pb-2 border-black">Pare</span>nts
            Information
          </CardTitle>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="flex flex-col gap-1">
              <Label htmlFor="fatherName">Father&apos;s Name</Label>
              <Input
                id="fatherName"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="fatherOccupation">Father&apos;s Occupation</Label>
              <Input
                id="fatherOccupation"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="motherName">Mother&apos;s Name</Label>
              <Input
                id="motherName"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="motherOccupation">Mother&apos;s Occupation</Label>
              <Input
                id="motherOccupation"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Input
                id="phoneNumber"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="altPhoneNumber">Alternate Phone Number</Label>
              <Input
                id="altPhoneNumber"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="nationality">Nationality</Label>
              <Input
                id="nationality"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="presentAddress">Present Address</Label>
              <Input
                id="presentAddress"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="permanentAddress">Permanent Address</Label>
              <Input
                id="permanentAddress"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
            <div className="flex flex-col gap-1">
              <Label htmlFor="parentAvatar">Parent Avatar</Label>
              <Input
                id="parentAvatar"
                className="p-1 border-l-red-500 border-l-2 rounded-none"
              />
            </div>
          </div>
          <div className="flex gap-5 my-5">
            <Button className="bg-emerald-500 rounded-sm hover:bg-emerald-700">
              Save
            </Button>
            <Button className="rounded-sm">Reset</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default FormsPeople;
