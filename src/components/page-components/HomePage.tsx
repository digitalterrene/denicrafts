"uce client";
import React from "react";
import { RiCustomerService2Line } from "react-icons/ri";
import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { WhyChooseUsAccordion } from "../ui-components/WhyChooseUsAccordion";
import { CarouselCustomArrows } from "../ui-components/CarouselCustomArrows";
import { Testimonials } from "../ui-components/Testimonials";
import { MdOutlinePayment } from "react-icons/md";
import { BsSuitcaseLg } from "react-icons/bs";
import { LuSmilePlus } from "react-icons/lu";
const qualities = [
  {
    name: "🛠️ Craftsmanship Unleashed",
    text: `At DeniCrafts, we don't just build structures; we craft legacies. 
    Our team of skilled artisans is driven by a deep-rooted passion for woodworking, 
    ensuring that each project is a testament to the timeless art of carpentry. 
    With a keen eye for detail and a commitment to quality, we breathe life into your ideas, 
    turning them into tangible masterpieces.`,
  },
  {
    name: "🤝 Tailored Solutions, Unmatched Expertise:",
    text: `Your vision is our blueprint. Whether it's custom woodwork that echoes 
    your unique style, meticulously designed built-in solutions, or transformative renovations, 
    DeniCrafts brings a wealth of expertise to every carpentry challenge. 
    We collaborate closely with our clients, understanding their needs and preferences to 
    deliver solutions that surpass expectations.`,
  },
  {
    name: "🌟 Reliability, Timelessness, and Precision",
    text: `DeniCrafts stands as a beacon of reliability in the world of carpentry. 
    Time is a valuable asset, and we respect yours. Our commitment to timely project 
    completion is matched only by our dedication to precision. We don't just meet standards; 
    we set them, ensuring that our craftsmanship stands the test of time.`,
  },
  {
    name: "🏡 Crafting Your Dream Space",
    text: `Your home is a canvas, and we are the artists. 
    DeniCrafts takes pride in transforming spaces into dreamscapes, leaving a 
    lasting imprint of quality and creativity. Whether it's crafting custom furniture, 
    enhancing built-in solutions, or revitalizing entire living spaces, we are here to 
    make your carpentry dreams a reality.`,
  },
];
const services = [
  {
    service: "Ceilings",
    description:
      "Elevate your space with our expertly crafted ceilings, designed to add architectural charm and enhance the overall aesthetics of your interior.",
  },
  {
    service: "Partitions",
    description:
      "Create functional and stylish spaces with our precision-designed partitions, tailored to meet your specific needs and maximize the utility of your area.",
  },
  {
    service: "Laminate Wooden Floors",
    description:
      "Experience the warmth and beauty of wood with our high-quality laminate flooring solutions, combining durability and aesthetics for a timeless finish.",
  },
  {
    service: "Vinyl Flooring",
    description:
      "Step into luxury with our versatile vinyl flooring options, offering a perfect blend of comfort, durability, and easy maintenance to suit any lifestyle.",
  },
  {
    service: "Single & Double Doors",
    description:
      "Make a grand entrance with our meticulously crafted single and double doors, combining elegance and security to leave a lasting impression on your space.",
  },
  {
    service: "Painting",
    description:
      "Transform your surroundings with our expert painting services, bringing vibrancy and a fresh new look to your interiors and exteriors with a touch of creativity.",
  },
  {
    service: "Rhinolite & Plastering",
    description:
      "Achieve a flawless finish with our rhinolite and plastering services, providing a smooth and durable surface for your walls that stands up to the test of time.",
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
          <p className="text-3xl">
            Who We Are - Crafting Dreams, Building Legacies
          </p>
          <p>
            Welcome to DeniCrafts, where every stroke of wood meets the artistry
            of craftsmanship, and every project is an opportunity to transform
            spaces into timeless reflections of your vision. As a premier
            carpentry contractor, we stand at the intersection of passion and
            precision, weaving together a tapestry of excellence in every piece
            we create.
          </p>
          <div className="space-y-2">
            {qualities?.map(({ name, text }) => (
              <div className="   text-gray-700 items-center gap-2">
                <h4 className="text-xl text-[#58442F] font-bold">{name}</h4>
                <p className="p-6 my-6 bg-gray-100">{text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/3 p-6 h-fit  bg-[#58442F]">
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
          <p> WE OFFER A WIDE SELECTION OF CARPENTRY SERVICES</p>
        </div>
        <button className="p-2 px-4  bg-white">SEE MORE</button>
      </div>
      {/* Services ends here */}
      {/* Our services starts here */}
      <div className="p-8 lg:p-40">
        <p className="text-[#B88A4D]">CARPENTRY</p>
        <p className="text-4xl">SERVICES</p>
        <div className="grid mt-16 lg:grid-cols-3 gap-6">
          {services?.map(({ service, description }, i) => (
            <div key={i}>
              {/* <img src={"img"} /> */}
              <p className="p-3 bg-[#B88A4D] text-white">{service}</p>{" "}
              <p className="mt-4">{description}</p>{" "}
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
        <div className="lg:w-1/3 w-full md:w-full ">
          <img
            className="w-full object-cover object-center"
            src="https://img.freepik.com/free-photo/car-being-taking-care-workshop_23-2149580604.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.1.1135384207.1703006759&semt=ais"
          />
        </div>
      </div>
      {/* Features (why choose us) section ends here */}
      {/* stats section starts here */}
      <div className="bg-[#58442F] grid grid-cols-2 lg:grid-cols-4 text-xs lg:text-md gap-4 text-center lg:gap-10 justify-between  p-16 capitalize ">
        <div className="  flex flex-col items-center  text-white  gap-3">
          <MdOutlinePayment className="text-2xl text-[#B88A4D] font-bold" />
          <p> Affordable Quotations</p>
        </div>
        <div className="  flex flex-col items-center   text-white  gap-3">
          <BsSuitcaseLg className="text-2xl text-[#B88A4D] font-bold" />
          <p>Reliable Services</p>
        </div>{" "}
        <div className="  flex flex-col items-center   text-white  gap-3">
          <RiCustomerService2Line className="text-2xl text-[#B88A4D] font-bold" />
          <p>Client-centric Approach</p>
        </div>{" "}
        <div className="  flex flex-col items-center   text-white  gap-3">
          <LuSmilePlus className="text-2xl text-[#B88A4D] font-bold" />
          <p>CUSTOMER SATISFACTION</p>
        </div>
      </div>
      {/* stats section ends here */}
      {/* Who we are section starts here */}{" "}
      {/* <div className="flex p-8 lg:p-40 gap-8 mt-40 w-full bg-[#F9F3EC] py-28  justify-between">
        {" "}
        <div className="space-y-4 w-full   ">
          <p className="text-[#B88A4D]">TESTIMONIALS</p>
          <p className="text-3xl">WHAT OUR CLIENTS SAY</p>

          <div className="space-y-2   w-full">
            <Testimonials />
          </div>
        </div>
      </div> */}
      {/* Who we are section ends here */}
    </div>
  );
}
