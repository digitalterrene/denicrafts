import React from "react";
import { WhyChooseUsAccordion } from "../ui-components/WhyChooseUsAccordion";

export default function AboutUs() {
  return (
    <div className="space-y-5">
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/warm-gray-cut-wood-texture_587448-4788.jpg?uid=R86751016&ga=GA1.1.1135384207.1703006759&semt=ais_ai_generated')`,
        }}
        className="bg-cover p-20 text-center bg-center bg-no-repeat"
      >
        <p className="text-4xl font-bold text-white">About Us</p>
      </div>
      <div className="lg:flex gap-20 py-10 max-w-6xl mx-auto ">
        <img
          className="h-[500px] w-[450px] object-center object-cover "
          src="https://images.unsplash.com/photo-1687422810663-c316494f725a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmxhY2slMjBjYXJwZW50ZXJ8ZW58MHx8MHx8fDA%3D"
        />
        <div className="p-8 lg:p-0">
          <p className="text-[#B88A4D]">FEATURES</p>
          <p className="text-3xl mb-4 font-bold">WHO WE ARE</p>
          <p className="font-medium text-gray-700 mb-4">
            These are the voyages of the Starship Enterprise., Were gonna do it.
            Give us any chance well take it. Give us any rule we'll break it.
          </p>
          <p className="  text-gray-400 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            tempore commodi vitae similique id perferendis vero, laborum ducimus
            saepe consectetur, natus ea! Maiores tempora necessitatibus,
            voluptate temporibus. Et aliquid at sunt voluptate laudantium nihil
            iure fugit quibusdam esse distinctio eius voluptates, illo eveniet
            tempore. Amet dolorem, exercitationem blanditiis aperiam numquam
            accusamus repellendus? exercitationem quae modi. A sit aperiam rem
            iusto eos voluptas.
          </p>
          <button className="py-2 px-6 bg-[#B88A4D] text-white">
            Contact Us Now
          </button>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/one-man-holding-leather-making-craft-product-generated-by-ai_188544-44994.jpg?uid=R86751016&ga=GA1.1.1135384207.1703006759&semt=ais_ai_generated')`,
        }}
        className="bg-cover bg-center bg-no-repeat"
      >
        <div className="  bg-[#B88A4D]/70 space-y-4 p-4 lg:p-10 flex flex-col items-center ">
          {" "}
          <p className="text-4xl font-bold text-white">073 910 6660</p>
          <p className="lg:text-2xl font-bold text-center lg:w-7/12 text-white">
            FEEL FREE TO CONTACT US. WE ARE ALWAYS HERE TO MAKE YOUR CAR MORE
            LUXURY THAN BEFORE
          </p>
          <div className=" flex items-center gap-4">
            <a className="border text-white hover:bg-white hover:text-[#B88A4D] px-6 py-2 uppercase">
              {" "}
              get in touch
            </a>
            <a className="border text-white hover:bg-white hover:text-[#B88A4D] px-6 py-2 uppercase">
              {" "}
              quick quote
            </a>
          </div>
        </div>
      </div>
      {/* Features (why choose us) section starts here */}{" "}
      <div className="lg:flex p-4 lg:p-32 gap-10  py-28  justify-between">
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
    </div>
  );
}
