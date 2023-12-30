import React from "react";
import { WhyChooseUsAccordion } from "../ui-components/WhyChooseUsAccordion";
import ServicesTabs from "../ui-components/ServicesTabs";
import { portfolio } from "@/assets/data";

export default function OurPortfolio() {
  return (
    <div className="space-y-5">
      <div
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1664302186256-3ce895002630?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGJsYWNrJTIwY2FycGVudGVyfGVufDB8fDB8fHww')`,
        }}
        className="bg-cover   bg-center bg-no-repeat"
      >
        <div className="  bg-black/70 p-20 text-center ">
          <p className="text-4xl font-bold text-white">Our Services</p>
        </div>
      </div>
      <div className="  lg:p-20 lg:grid grid-cols-3 lg:gap-8 space-y-6 lg:space-y-0 lg:px-32">
        {portfolio?.map(({ image, name, category }, i) => (
          <div
            key={i}
            className="border-b-2 cursor-pointer  font-bold border-[#B88A4D]"
          >
            <img
              src={image}
              className="h-96 w-full object-cover object-center"
            />
            <div className="p-3 space-y-2 group hover:bg-[#B88A4D]">
              <p className="uppercase group-hover:text-white">{name}</p>
              <p className="text-[#B88A4D] group-hover:text-white">
                {category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
