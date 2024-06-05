"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SlCloudUpload } from "react-icons/sl";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Button } from "@/components/ui/button";

const FormsPostsPage = () => {
  return (
    <div className="mt-5 container">
      <div className="flex justify-between my-5 font-semibold">
        <p>Forms</p>
        <p>Forms &gt; Posts</p>
      </div>
      <div className="flex flex-col xl:flex-row gap-5">
        <Card className="w-full my-5 p-5 rounded-md border border-slate-500 bg-blue-200">
          <p className="my-5 col-span-5">Add Post</p>
          <Input className="mb-5" placeholder="Title" />
          <Textarea className="w-full h-32 mb-5" placeholder="Paragraph" />
          <div className="mb-5 flex items-center flex-col bg-blue-300 bg-opacity-30 border rounded-md p-5 hover:cursor-pointer">
            <SlCloudUpload size={24} className="mt-5" />
            <p className="mb-5">Upload the thumbnail</p>
          </div>
          <Input className="mb-5" placeholder="Category" />
          <Input className="mb-5" placeholder="Author" />
          <Input className="mb-5" placeholder="Tags" />
          <Textarea
            className="w-full h-32 mb-5 resize-none"
            placeholder="Summary"
          />
          <Input className="mb-5" placeholder="Content URL" />
          <Input className="mb-5" placeholder="Thumbnail URL" />
          <div className="flex gap-5 w-full">
            <Button className="w-full px-2 py-1 bg-gray-700 text-slate-200 hover:bg-gray-900 cursor-pointer">
              Cancel
            </Button>
            <Button className="w-full px-2 py-1 bg-blue-500 text-white hover:bg-blue-800 hover:text-white">
              Save
            </Button>
          </div>
        </Card>
        <Card className="w-full my-5 p-5 rounded-md border border-slate-500 bg-blue-200">
          <p className="my-5 col-span-5">Post Details</p>
          <Input className="mb-5" placeholder="Post ID" />
          <Input className="mb-5" placeholder="Date Created" />
          <Textarea className="w-full h-32 mb-5" placeholder="Excerpt" />
          <div className="mb-5 flex items-center flex-col bg-blue-300 bg-opacity-30 border rounded-md p-5 hover:cursor-pointer">
            <SlCloudUpload size={24} className="mt-5" />
            <p className="mb-5">Upload additional media</p>
          </div>
          <Input
            className="mb-5"
            placeholder="Status (e.g., Draft, Published)"
          />
          <Textarea
            className="w-full h-32 mb-5 resize-none"
            placeholder="Post Content"
          />
          <Input className="mb-5" placeholder="SEO Title" />
          <Input
            className="w-full h-32 mb-5 resize-none"
            placeholder="SEO Description"
          />
          <Input className="mb-5" placeholder="Priority" />
          <div className="flex gap-5 w-full">
            <Button className="w-full px-2 py-1 bg-gray-700 text-slate-200 hover:bg-gray-900 cursor-pointer">
              Reset
            </Button>
            <Button className="w-full px-2 py-1 bg-blue-500 text-white hover:bg-blue-800 hover:text-white">
              Publish
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default FormsPostsPage;
