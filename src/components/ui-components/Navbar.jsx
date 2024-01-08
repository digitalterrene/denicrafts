"use client";
import { Button, Drawer } from "@material-tailwind/react";
import { usePathname } from "next/navigation";
import React from "react";
import { IoMdMenu } from "react-icons/io";
import { MdOutlineClear } from "react-icons/md";
const routes = [
  "home",
  "about-us",
  "services",
  //  "portfolio",
  "contact-us",
];
export default function Navbar() {
  const [openRight, setOpenRight] = React.useState(false);
  const pathname = usePathname();

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);
  return (
    <div className="p-6 lg:px-40 flex items-center justify-between">
      <a href="/">
        <img className="lg:w-40 w-32" src="/brand/logo.png" />
      </a>
      <div className="hidden lg:flex items-center overflow-x-auto gap-3">
        {routes?.map((route) => (
          <a
            href={`/${route}`}
            className={`lg:uppercase ${
              pathname === `/${route}` ? "text-[#B88A4D]  " : "text-gray-700"
            } font-bold text-xs lg:text-sm hover:text-[#B88A4D]`}
            key={route}
          >
            {route.replaceAll("-", " ")}
          </a>
        ))}
      </div>
      <Button
        onClick={openDrawerRight}
        className="  lg:hidden hover:shadow-none p-0 bg-white  text-black items-center  shadow-none  w-10 h-10 flex text-xl text-center justify-center font-semibold rounded-lg border border-gray-500 text-gray-500 hover:border-gray-800 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-400 dark:text-gray-400 dark:hover:text-gray-300   "
      >
        <IoMdMenu className="text-xl" />
      </Button>
      <Drawer
        placement="right"
        open={openRight}
        onClose={closeDrawerRight}
        className="p-4"
      >
        {" "}
        <Button
          onClick={closeDrawerRight}
          className=" hover:shadow-none p-0 bg-white  text-[#58442F] ml-auto items-center  shadow-none  w-10 h-10 flex text-xl text-center justify-center font-semibold rounded-lg   border-gray-500 text-gray-500 hover:border-gray-800 hover:text-gray-800 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-400 dark:text-gray-400 dark:hover:text-gray-300   "
        >
          <MdOutlineClear className="text-xl" />
        </Button>
        <div className="flex flex-col space-y-4 capitalize text-[#B88A4D]">
          {routes?.map((route) => (
            <a
              href={`/${route}`}
              className={`lg:uppercase ${
                pathname === `/${route}` ? "text-[#B88A4D]  " : "text-gray-700"
              } font-bold text-xs lg:text-sm hover:text-[#B88A4D]`}
              key={route}
            >
              {route.replaceAll("-", " ")}
            </a>
          ))}
        </div>
      </Drawer>
    </div>
  );
}
