"use client";
import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { services } from "@/assets/data";

export default function ServicesTabs() {
  const [activeTab, setActiveTab] = React.useState("Installations and Repairs");
  const data = [
    {
      label: "Installations and Repairs",
      icon: "https://cdn-icons-png.flaticon.com/128/4918/4918627.png",
      value: "Installations and Repairs",
    },
    {
      label: "Flooring Solutions",
      icon: "https://cdn-icons-png.flaticon.com/128/8172/8172369.png",
      value: "Flooring Solutions",
    },
    {
      label: "Painting & Varnishing",
      icon: "https://cdn-icons-png.flaticon.com/128/1815/1815785.png",
      value: "Painting & Varnishing",
    },
    {
      label: "Rhinolite & Plastering",
      icon: "https://cdn-icons-png.flaticon.com/128/11060/11060648.png",
      value: "Rhinolite & Plastering",
    },
  ];
  return (
    <Tabs className="lg:w-9/12 mx-auto py-6 lg:py-20" value={activeTab}>
      <TabsHeader
        className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent  border-b-8 border-[#B88A4D] shadow-none rounded-none",
        }}
      >
        {data.map(({ label, icon, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={`${
              activeTab === value
                ? "text-[#B88A4D] font-bold   flex flex-col items-center border-[#B88A4D] border-b-8"
                : ""
            } p-3 lg:p-10 text-xs lg:text-md  border flex flex-col items-center   `}
          >
            <img src={icon} className="w-4 lg:w-10 mx-auto mb-3" />
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className=" lg:mt-20">
        {services.map(({ name, image, tagline, desc }, i) => (
          <TabPanel key={i} value={name}>
            <div className="lg:flex space-y-4 lg:space-y-0 gap-20 py-10 max-w-6xl mx-auto ">
              <div>
                <p className="text-[#B88A4D]">WHAT WE DO</p>
                <p className="text-3xl mb-4 font-bold">{name}</p>
                <p className="font-medium text-gray-700 mb-4">{tagline}</p>
                <p className="  text-gray-400 mb-4">{desc}</p>
                <button className="py-2 px-6 bg-[#B88A4D] text-white">
                  Contact Us Now
                </button>
              </div>{" "}
              <img
                className="h-[500px] w-[450px] object-center object-cover "
                src={image}
              />
            </div>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
