import { RxDashboard } from "react-icons/rx";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import { MdFormatListBulleted } from "react-icons/md";

import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { FaBell } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BiStats } from "react-icons/bi";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Forms, UiElements } from "@/lib/navbarDropDownContent";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <nav className="flex  flex-col  w-full space-y-5 h-35  p-5  shadow-xl text-gray-600 sticky top-0 z-50 bg-white ">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <Link href="/" className="md:hidden">
              <Image
                src="/Pngtreecircuit logo template vector_4018325.png"
                width={50}
                height={50}
                alt="logo"
              />
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <GiHamburgerMenu className="md:hidden" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="flex flex-col p-10 gap-10 h-screen w-[80vw]">
                <Link href="/" className="hover:text-black">
                  <div className="flex space-x-2 items-center">
                    <RxDashboard />
                    <span>Dashboard </span>
                  </div>
                </Link>
                <Link href="/statistics">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="flex space-x-2 items-center hover:text-black">
                      <BiStats /> <span>Statistics </span>
                    </DropdownMenuTrigger>
                  </DropdownMenu>
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
                      <Link key={index} href={element.link}>
                        <DropdownMenuItem>{element.name}</DropdownMenuItem>
                      </Link>
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
                      <Link key={index} href={element.link}>
                        <DropdownMenuItem>{element.name}</DropdownMenuItem>
                      </Link>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </DropdownMenuContent>
            </DropdownMenu>
            <h1 className="hidden md:block text-black text-3xl font-bold hover:text-gray-700">
              <Link href="/"> Solutions</Link>{" "}
            </h1>{" "}
          </div>
          <div className="flex space-x-3 md:space-x-8">
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
                <DropdownMenuItem>Spanish</DropdownMenuItem>
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
                <p className="hidden md:block">Walid H.</p>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <Link href="/profile">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                </Link>

                <DropdownMenuItem>Log Out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <div className="hidden md:flex container mx-auto space-x-8">
          <Link href="/" className="hover:text-black">
            <div className="flex space-x-2 items-center">
              <RxDashboard />
              <span>Dashboard </span>
            </div>
          </Link>
          <Link href="/statistics">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex space-x-2 items-center hover:text-black">
                <BiStats /> <span>Statistics </span>
              </DropdownMenuTrigger>
            </DropdownMenu>
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
                <Link key={index} href={element.link}>
                  <DropdownMenuItem>{element.name}</DropdownMenuItem>
                </Link>
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
                <Link key={index} href={element.link}>
                  <DropdownMenuItem>{element.name}</DropdownMenuItem>
                </Link>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
