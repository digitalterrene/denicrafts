"use client";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";

export default function TestimonialWrapper({ testimonial }) {
  return (
    <div className="flex    flex-col items-center">
      <div className="  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className=" ">
          <div className="relative    ">
            <div className="lg:w-[500px] w-60 h-52   mx-auto rounded-xl  bg-gray-300/20">
              <div className="relative h-full">
                <ImQuotesLeft
                  width="16"
                  height="16"
                  className="absolute lg:-top-6 -top-10 -start-8 h-16 w-16 text-gray-400 dark:text-gray-700"
                />
                <div className="relative   z-10">
                  <p className=" p-5 lg:p-8 lg:pr-12 lg:text-xl text-sm dark:text-white">
                    <em>{testimonial?.testimonial}</em>
                  </p>
                </div>
                <ImQuotesLeft
                  width="16"
                  height="16"
                  className="absolute -bottom-5 -end-8 h-16 w-16 transform scale-x-[-1] text-gray-400 dark:text-gray-700"
                />
              </div>
              <div className="lg:mt-10">
                {" "}
                <footer className="mt-6">
                  <div className="flex gap-2 items-center">
                    <div className="  flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-full"
                        src={testimonial?.image}
                        alt="Image Description"
                      />
                    </div>
                    <div className="ms-4 md:ms-0">
                      <div className="text-base font-semibold text-gray-800 dark:text-gray-200">
                        {testimonial?.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {testimonial?.position} | {testimonial?.company}
                      </div>
                    </div>
                  </div>
                </footer>
                <div className="mt-8">
                  <a
                    className="py-3 flex items-center px-4 text-center lg:text-start   w-full lg:w-auto   gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-800 text-white hover:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Read the story
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
