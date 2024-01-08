import React from "react";
import { WhyChooseUsAccordion } from "../ui-components/WhyChooseUsAccordion";
import ServicesTabs from "../ui-components/ServicesTabs";

export default function AboutUs() {
  return (
    <div className="space-y-5">
      <div
        style={{
          backgroundImage: `url('https://plus.unsplash.com/premium_photo-1663021826744-ad14835324f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGJsYWNrJTIwY2FycGVudGVyfGVufDB8fDB8fHww')`,
        }}
        className="bg-cover   bg-bottom bg-no-repeat"
      >
        <div className="  bg-black/70 p-20 text-center ">
          <p className="text-4xl font-bold text-white">OUR SERVICES</p>
        </div>
      </div>
      <div className=" ">
        <ServicesTabs />
      </div>
      {/* Features (why choose us) section starts here */}{" "}
      <div className="lg:flex p-8 lg:p-32 gap-10  py-28  justify-between">
        {" "}
        <div className="space-y-4 w-full lg:w-2/3">
          <p className="text-[#B88A4D]">FEATURES</p>
          <p className="text-3xl">WHY CHOOSE US</p>
          <WhyChooseUsAccordion />
        </div>
        <div className="lg:w-1/3 w-full md:w-full ">
          <img
            className="w-full object-cover object-center"
            src="https://img.freepik.com/free-photo/car-being-taking-care-workshop_23-2149580604.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.1.1135384207.1703006759&semt=ais"
          />
        </div>
      </div>
      {/* Features (why choose us) section ends here */}
    </div>
  );
}
