"use client";
import React, { useState } from "react";
import TestimonialWrapper from "./TestimonialWrapper";
import { george, nicole, philip } from "@/assets/testimonials";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    <TestimonialWrapper testimonial={nicole} />,
    <TestimonialWrapper testimonial={george} />,
    <TestimonialWrapper testimonial={philip} />,
  ];
  const nextSlide = () => {
    const nextIndex = (currentSlide + 1) % slides.length;
    setCurrentSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    setCurrentSlide(prevIndex);
  };

  return (
    <div className=" flex mt-20  mx-auto w-full">
      <div className="flex items-center">
        <button
          className="hover:border-[#494F5D] border lg:w-28 py-2 px-4 border-transparent"
          onClick={prevSlide}
        >
          <FaArrowLeft className="lg:hidden block" />
          <p className="hidden lg:block">Previous</p>
        </button>
      </div>
      <div className="lg:px-60 w-full   flex justify-center">
        {slides[currentSlide]}
      </div>{" "}
      <div className="flex items-center">
        <button
          className="hover:border-[#494F5D] border lg:w-28 py-2 px-4 border-transparent"
          onClick={nextSlide}
        >
          <FaArrowRight className="lg:hidden block" />
          <p className="hidden lg:block">Next</p>
        </button>
      </div>
    </div>
  );
}
