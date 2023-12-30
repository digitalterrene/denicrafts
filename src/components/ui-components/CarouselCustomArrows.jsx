"use client";
import { Carousel } from "@material-tailwind/react";
export function CarouselCustomArrows() {
  return (
    <Carousel
      autoplay={true}
      loop={true}
      autoplayDelay={4000}
      className="rounded-none  overflow-hidden h-[500px]"
      prevArrow={({ handlePrev }) => (
        <button
          onClick={handlePrev}
          className="!absolute start-0 inline-flex justify-center items-center w-[46px] h-full text-white   hover:bg-[#B88A4D]/70 top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </button>
      )}
      nextArrow={({ handleNext }) => (
        <button
          onClick={handleNext}
          className="!absolute  justify-center items-center w-[46px] px-2 h-full text-white   hover:bg-[#B88A4D]/70 top-2/4 right-0 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      )}
    >
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/still-life-wood-engraving-workshop_23-2149185419.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.2.1135384207.1703006759&semt=sph')`,
        }}
        className="h-full lg:flex items-center px-8 lg:px-40 justify-between w-full bg-center bg-cover"
      >
        <div className=" lg:w-1/2  py-8 lg:py-0">
          <p className="text-xl lg:text-3xl font-medium mb-5 text-white">
            WELCOME TO CRAFTSMAN WHO WE ARE
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure odio
            praesentium sed dignissimos atque enim dolorum assumenda eos vitae,
            mollitia rem, nam laborum expedita{" "}
          </p>
          <button className="mt-16 px-8 bg-[#B88A4D] text-white p-3">
            Buy It Now
          </button>
        </div>
        <div className="hidden lg:block">
          <img src="/images/denis1.png" className="w-96" />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/top-view-carpenter-set-tools_23-2148428306.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.2.1135384207.1703006759&semt=sph')`,
        }}
        className="h-full w-full bg-center bg-cover"
      ></div>
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/close-up-photo-cutting-wood-with-fretsaw_176420-4786.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.2.1135384207.1703006759&semt=sph')`,
        }}
        className="h-full px-8 lg:px-40 lg:flex flex-col justify-center w-full bg-center bg-cover"
      >
        <div className="w-full lg:w-fit flex flex-col items-center mx-auto">
          <p className="text-white font-bold text-2xl lg:text-6xl">
            Design - Quality - Experience
          </p>
          <div className="bg-white w-32 my-10 h-1.5"> </div>
          <p className="text-white my-4">We love art</p>
          <button className="mt-16 px-8 bg-[#B88A4D] text-white p-3">
            Buy It Now
          </button>
        </div>
      </div>
    </Carousel>
  );
}
