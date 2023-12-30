"uce client";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { WhyChooseUsAccordion } from "../ui-components/WhyChooseUsAccordion";
import { CarouselCustomArrows } from "../ui-components/CarouselCustomArrows";
import { Testimonials } from "../ui-components/Testimonials";
const qualities = [
  " Professional Staff",
  "Latest Mechanichal Technology",
  "Certified Materials",
  " Very Cheap Prices",
  " Creative Designers",
  " Finishing Work Before Deadline",
];
const services = [
  {
    img: "https://img.freepik.com/free-photo/people-renovating-house-concept_53876-24841.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.1.1135384207.1703006759&semt=sph",
    name: "Exterior Design",
    desc: "Showcase you style oursite home with inspiration from these exteior paint color schemes. Send us a drawing and we respond with a quote.",
  },
  {
    img: "https://img.freepik.com/free-photo/tools-wood-sawdust-workshop_23-2148679128.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.1.1135384207.1703006759&semt=sph",
    name: "Office Furniture",
    desc: "A new furniture typology for open spaces. our product range is a new haven in the office- for employees, clients and visitors alike.",
  },
  {
    img: "https://img.freepik.com/free-photo/tools-wood-sawdust-workshop_23-2148679128.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.1.1135384207.1703006759&semt=sph",
    name: "Family Furniture",
    desc: "Family room is the place to gather together with those you love. We make your hourse becomes your warm home with the spectacular furniture.",
  },
  {
    img: "https://img.freepik.com/free-photo/portrait-handsome-carpenter-working-with-wooden-skate-workshop-profile-view_155003-31338.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.1.1135384207.1703006759&semt=sph",
    name: "Laminate Works",
    desc: "Family room is the place to gather together with those you love. We make your hourse becomes your warm home with the spectacular furniture.",
  },
];
export default function HomePage() {
  return (
    <div>
      <CarouselCustomArrows />
      {/* Who we are section starts here */}{" "}
      <div className="lg:flex p-8 lg:p-40 gap-8 space-y-6 lg:space-y-0 py-28  justify-between">
        {" "}
        <div className="space-y-4 lg:w-2/3">
          <p className="text-[#B88A4D]">WELCOME TO DENICRAFTS</p>
          <p className="text-3xl">WHO WE ARE</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure odio
            praesentium sed dignissimos atque enim dolorum assumenda eos vitae,
            mollitia rem, nam laborum expedita. Natus sint atque possimus
            similique recusandae consectetur suscipit delectus dolore iure
            numquam, placeat voluptatem, consequuntur alias officiis vero itaque
            nesciunt fuga ratione eum deserunt dicta molestias sit excepturi.
            imus error? Voluptatem?
          </p>
          <div className="space-y-2">
            {qualities?.map((quality) => (
              <div className="flex items-center gap-2">
                <div className="bg-[#B88A4D] w-fit text-white text-2xl">
                  <IoMdCheckmark />
                </div>
                {quality}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/3 p-6  bg-[#58442F]">
          <p className="text-3xl mb-4 text-center text-white">
            REQUEST A QUOTE
          </p>
          <div className="flex flex-col space-y-4  items-center ">
            <label htmlFor="input-email-label" className="sr-only">
              Email
            </label>
            <input
              type="text"
              id="input-email-label"
              className="py-3 px-4 block w-full border-gray-200   text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Your Name"
            />
            <label htmlFor="input-contact-number-label" className="sr-only">
              Contact Number
            </label>
            <input
              type="number"
              id="input-contact-number-label"
              className="py-3 px-4 block w-full border-gray-200   text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Your Contact Number"
            />
            <label htmlFor="input-message-label" className="sr-only">
              Message
            </label>
            <textarea
              id="input-message-label"
              className="py-3 px-4 block w-full h-40 border-gray-200   text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="Your Name"
            />
          </div>
          <button className="mt-16 px-8 bg-[#B88A4D] text-white p-3">
            Send Us A Message
          </button>
        </div>
      </div>
      {/* Who we are section ends here */}
      {/* Services starts here */}
      <div className="bg-[#58442F] lg:flex justify-between  p-6 capitalize lg:px-20">
        <div className="flex lg:mb-0 mb-6 lg:items-center items-start text-white  gap-3">
          <HiOutlineSquare3Stack3D className="lg:text-xl text-3xl" />
          <p> WE OFFER A WIDE SECTION OF WOODWORK SERVICES</p>
        </div>
        <button className="p-2 px-4  bg-white">Purchase Now</button>
      </div>
      {/* Services ends here */}
      {/* Our services starts here */}
      <div className="p-8 lg:p-40">
        <p className="text-[#B88A4D]">HAND CRAFTING</p>
        <p className="text-4xl">SERVICES</p>
        <div className="grid mt-16 lg:grid-cols-3 gap-6">
          {services?.map(({ name, img, desc }, i) => (
            <div key={i}>
              <img src={img} />
              <p className="p-3 bg-[#B88A4D] text-white">{name}</p>{" "}
              <p className="mt-4">{desc}</p>{" "}
            </div>
          ))}
        </div>
      </div>
      {/* Our services ends here */}
      {/* Features (why choose us) section starts here */}{" "}
      <div className="lg:flex p-8 lg:p-32 lg:gap-10  py-28  justify-between">
        {" "}
        <div className="space-y-4 lg:w-2/3">
          <p className="text-[#B88A4D]">FEATURES</p>
          <p className="text-3xl">WHY CHOOSE US</p>
          <WhyChooseUsAccordion />
        </div>
        <div className="lg:w-1/3  ">
          <img src="https://img.freepik.com/free-photo/car-being-taking-care-workshop_23-2149580604.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.1.1135384207.1703006759&semt=ais" />
        </div>
      </div>
      {/* Features (why choose us) section ends here */}
      {/* stats section starts here */}
      <div className="bg-[#58442F] grid grid-cols-2 lg:grid-cols-4 text-xs lg:text-md gap-4 text-center lg:gap-10 justify-between  p-16 capitalize ">
        <div className="  flex flex-col items-center  text-white  gap-3">
          <HiOutlineSquare3Stack3D className="text-xl" />
          <p className="text-2xl text-[#B88A4D] font-bold"> 50</p>
          <p> HAPPY CUSTOMERS</p>
        </div>
        <div className="  flex flex-col items-center   text-white  gap-3">
          <HiOutlineSquare3Stack3D className="text-xl" />
          <p className="text-2xl text-[#B88A4D] font-bold"> 213</p>
          <p>PROJECTS DONE</p>
        </div>{" "}
        <div className="  flex flex-col items-center   text-white  gap-3">
          <HiOutlineSquare3Stack3D className="text-xl" />
          <p className="text-2xl text-[#B88A4D] font-bold"> 13</p>
          <p>5 STAR GOOGLE REVIEWS</p>
        </div>{" "}
        <div className="  flex flex-col items-center   text-white  gap-3">
          <HiOutlineSquare3Stack3D className="text-xl" />
          <p className="text-2xl text-[#B88A4D] font-bold"> 100%</p>
          <p>CUSTOMER SATISFACTION</p>
        </div>
      </div>
      {/* stats section ends here */}
      {/* Who we are section starts here */}{" "}
      <div className="flex p-8 lg:p-40 gap-8 mt-40 w-full bg-[#F9F3EC] py-28  justify-between">
        {" "}
        <div className="space-y-4 w-full   ">
          <p className="text-[#B88A4D]">TESTIMONIALS</p>
          <p className="text-3xl">WHAT OUR CLIENTS SAY</p>

          <div className="space-y-2   w-full">
            <Testimonials />
          </div>
        </div>
      </div>
      {/* Who we are section ends here */}
    </div>
  );
}
