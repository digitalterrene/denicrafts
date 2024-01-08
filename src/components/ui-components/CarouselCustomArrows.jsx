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
          backgroundImage: `url('/images/main-image.jpg')`,
        }}
        className="h-full gap-6 lg:flex items-center px-8 lg:px-40 justify-between w-full bg-center bg-cover"
      >
        <div className=" lg:w-2/3  py-8 lg:py-0">
          <p className="text-xl lg:text-3xl font-medium mb-5 text-white">
            Welcome to DeniCrafts – Where Craftsmanship Meets Precision
            Carpentry
          </p>
          <p className="text-[#B88A4D] p-4 bg-white/40">
            At DeniCrafts, we take pride in turning your carpentry dreams into
            solid realities. As your dedicated carpentry contractor, we bring
            skill, passion, and attention to detail to every project, ensuring a
            seamless blend of functionality and aesthetics
          </p>
          <button className="mt-16 px-8 bg-[#B88A4D] text-white p-3">
            Contact Us
          </button>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://img.freepik.com/free-photo/side-view-worker-using-drill_23-2149916248.jpg?size=626&ext=jpg&ga=GA1.1.1963481539.1704550986&semt=sph"
            className="w-96 h-[500px] object-cover object-center"
          />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url('/images/main-2.jpg')`,
        }}
        className="h-full lg:flex gap-6 items-center px-8 lg:px-40 justify-between w-full bg-center bg-cover"
      >
        <div className=" lg:w-2/3 space-y-4 py-8 lg:py-0">
          <p className="text-xl lg:text-3xl font-medium mb-5 text-white">
            Craftsmanship Excellence
          </p>
          <p className="bg-[#B88A4D]/60 text-white p-4  ">
            Each project is a testament to our commitment to unparalleled
            craftsmanship.
          </p>
          <p className="text-xl lg:text-3xl font-medium mb-5 text-white">
            Tailored Solutions
          </p>
          <p className="bg-[#B88A4D]/60 text-white p-4  ">
            Your vision, our expertise – together, we create spaces that
            resonate with your unique style.
          </p>
          <p className="text-xl lg:text-3xl font-medium mb-5 text-white">
            Reliability
          </p>
          <p className="bg-[#B88A4D]/60 text-white p-4  ">
            Trust a contractor that values your time and ensures timely project
            completion.
          </p>
        </div>
        <div className="hidden lg:block">
          <img
            src="https://img.freepik.com/free-photo/cardboard-house-repair-tools-with-copy-space_23-2148393078.jpg?w=740&t=st=1704734188~exp=1704734788~hmac=b598cd49ab64a0bed48961f42b12a6fe8b4428addf038d66d85f2c3cf44b363a"
            className="w-96 h-[500px] object-cover object-center"
          />
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url('/images/main-3.jpg')`,
        }}
        className="h-full px-8 lg:px-40 lg:flex flex-col justify-center w-full bg-center bg-cover"
      >
        <div className="w-full lg:w-fit flex flex-col items-center mx-auto">
          <p className="text-white font-bold text-2xl lg:text-6xl">
            Design - Quality - Experience
          </p>
          <div className="bg-white w-32 my-10 h-1.5"> </div>
          <p className="text-white w-2/3 text-center my-4">
            Each project is a testament to our commitment to unparalleled
            craftsmanship. Ready to transform your space with DeniCrafts?
            Contact us today for a consultation, and let's embark on a carpentry
            journey that exceeds your expectations. Your dream space is just a
            call away!
          </p>
          <button className="mt-16 px-8 bg-[#B88A4D] text-white p-3">
            Contact Us
          </button>
        </div>
      </div>
    </Carousel>
  );
}
