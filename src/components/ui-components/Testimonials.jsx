"use client";
import { Carousel } from "@material-tailwind/react";
import { ImQuotesLeft } from "react-icons/im";

export function Testimonials() {
  let testimonial = {};
  return (
    <Carousel
      prevArrow={null}
      nextArrow={null}
      className="rounded-xl w-full  "
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex items-center justify-center  w-full -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-[#B88A4D]" : "w-4 bg-gray-400 "
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      <div className="h-[500px]   w-full">
        {" "}
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
                        <em>
                          CloudConvert converts your image files online. Amongst
                          many others, we support PNG, JPG, GIF, WEBP and HEIC.
                          You can use the options to control image resolution,
                          quality and file size.
                        </em>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[500px] w-full">
        {" "}
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
                        <em>
                          CloudConvert converts your image files online. Amongst
                          many others, we support PNG, JPG, GIF, WEBP and HEIC.
                          You can use the options to control image resolution,
                          quality and file size.
                        </em>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[500px] w-full">
        {" "}
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
                        <em>
                          CloudConvert converts your image files online. Amongst
                          many others, we support PNG, JPG, GIF, WEBP and HEIC.
                          You can use the options to control image resolution,
                          quality and file size.
                        </em>
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
