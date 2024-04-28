import { RxDashboard } from "react-icons/rx";
import { IoDiamondOutline } from "react-icons/io5";
import {
  MdOutlineInsertPageBreak,
  MdOutlineKeyboardArrowDown,
  MdReadMore,
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdFormatListBulleted } from "react-icons/md";
import { LuBarChart4 } from "react-icons/lu";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { FaBell } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Charts,
  Forms,
  More,
  Pages,
  UiElements,
} from "@/lib/navbarDropDownContent";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <>
      <nav className="flex  flex-col  w-full space-y-5 h-35  p-5  shadow-xl text-gray-600 sticky top-0 z-50 bg-white ">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-black text-3xl font-bold hover:text-gray-700">
              <Link href="/">Achintya Solutions</Link>{" "}
            </h1>{" "}
          </div>
          <div className="flex space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <FaSearch />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="rounded-none">
                <DropdownMenuItem className="flex rounded-none">
                  <Input
                    type="text"
                    className="rounded-none"
                    placeholder="Search..."
                  />
                  <Button className="bg-blue-500 rounded-none hover:bg-blue-800">
                    <FaSearch />
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-3">
                English{" "}
                <span>
                  <MdOutlineKeyboardArrowDown />
                </span>
              </DropdownMenuTrigger>

              <DropdownMenuContent>
                <DropdownMenuItem>German</DropdownMenuItem>
                <DropdownMenuItem>Hindi</DropdownMenuItem>
                <DropdownMenuItem>Italian</DropdownMenuItem>
                <DropdownMenuItem>SPanish</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="flex items-center">
              <FaBell />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Walid H.</p>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Inbox</DropdownMenuItem>
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Lock Account</DropdownMenuItem>
                <DropdownMenuItem>Log Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="flex container mx-auto space-x-8">
          <Link href="/dashboard" className="hover:text-black">
            <div className="flex space-x-2 items-center">
              <RxDashboard />
              <span>Dashboard </span>
            </div>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex space-x-2 items-center hover:text-black">
              <IoDiamondOutline /> <span>UI Elements </span>{" "}
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {UiElements.map((element, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={element.link}>{element.name}</Link>{" "}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex space-x-2 items-center hover:text-black">
              <MdOutlineInsertPageBreak /> <span>Pages </span>
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {Pages.map((element, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={element.link}>{element.name}</Link>{" "}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex space-x-2 items-center hover:text-black">
              <MdFormatListBulleted />
              <span>Forms</span>{" "}
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {Forms.map((element, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={element.link}>{element.name}</Link>{" "}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex space-x-2 items-center hover:text-black">
              <LuBarChart4 />
              <span>Charts</span>{" "}
              <span>
                <MdOutlineKeyboardArrowDown />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {Charts.map((element, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={element.link}>{element.name}</Link>{" "}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex space-x-2 items-center hover:text-black">
              <MdReadMore />
              <span>More</span>{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {More.map((element, index) => (
                <DropdownMenuItem key={index}>
                  <Link href={element.link}>{element.name}</Link>{" "}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
