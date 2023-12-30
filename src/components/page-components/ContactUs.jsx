import React from "react";
import { WhyChooseUsAccordion } from "../ui-components/WhyChooseUsAccordion";
import ServicesTabs from "../ui-components/ServicesTabs";
import { portfolio } from "@/assets/data";

export default function ContactUs() {
  return (
    <div className=" ">
      <div
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/closeup-businessman-using-mobile-phone_53876-14790.jpg?size=626&ext=jpg&ga=GA1.1.1135384207.1703006759&semt=ais')`,
        }}
        className="bg-cover   bg-center bg-no-repeat"
      >
        <div className="  bg-black/70 p-20 text-center ">
          <p className="text-4xl font-bold text-white">Contact Us</p>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.91032990071!2d27.957623187632684!3d-26.171343975131446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg!5e0!3m2!1sen!2sza!4v1703928302781!5m2!1sen!2sza"
        className="w-full h-[500px]"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      {/* <!-- Contact Us --> */}
      <div className=" lg:flex ">
        <div className="lg:w-1/4 flex flex-col items-center py-32 text-white text-center space-y-8 bg-[#B88A4D] p-20">
          <p className="text-3xl uppercase">SPECIAL OFFER</p>
          <p className="  mx-auto">
            Flatnin' the hills Someday the mountain might get ‘em but the law
            never will. Makin their way the only way they know how. That's just
            a the law will allow.
          </p>
          <button className="border border-white py-2 px-4 hover:bg-white hover:text-[#B88A4D]">
            See More
          </button>
        </div>
        {/* <!-- Card --> */}
        <div className="flex flex-col lg:w-3/4 bg-[#F9F9F9] rounded-xl p-4 sm:p-6 lg:p-8 dark:border-gray-700">
          <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
            GET IN TOUCH WITH US
          </h2>

          <form className="w-full">
            <div className="grid   w-full gap-4">
              {/* <!-- Grid --> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    for="hs-about-contacts-1"
                    className=" text-sm uppercase text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="hs-firstname-contacts-1"
                    id="hs-firstname-contacts-1"
                    className="py-3 px-4 block w-full border focus:outline-none border-[#B88A4D]  text-sm "
                    placeholder="First Name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    for="hs-about-contacts-1"
                    className=" text-sm uppercase text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="hs-lastname-contacts-1"
                    id="hs-lastname-contacts-1"
                    className="py-3 px-4 block w-full border focus:outline-none border-[#B88A4D]  text-sm "
                    placeholder="Last Name"
                  />
                </div>
              </div>
              {/* <!-- End Grid --> */}

              <div className="space-y-2">
                <label
                  for="hs-about-contacts-1"
                  className=" text-sm uppercase text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="hs-email-contacts-1"
                  id="hs-email-contacts-1"
                  autocomplete="email"
                  className="py-3 px-4 block w-full border focus:outline-none border-[#B88A4D]  text-sm "
                  placeholder="Email"
                />
              </div>

              <div className="space-y-2">
                <label
                  for="hs-about-contacts-1"
                  className=" text-sm uppercase text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="hs-phone-number-1"
                  id="hs-phone-number-1"
                  className="py-3 px-4 block w-full border focus:outline-none border-[#B88A4D]  text-sm "
                  placeholder="Phone Number"
                />
              </div>

              <div className="space-y-2">
                <label
                  for="hs-about-contacts-1"
                  className=" text-sm uppercase text-gray-700"
                >
                  Details
                </label>
                <textarea
                  id="hs-about-contacts-1"
                  name="hs-about-contacts-1"
                  rows="4"
                  className="py-3 px-4 block h-60 w-full border focus:outline-none border-[#B88A4D]  text-sm "
                  placeholder="Details"
                ></textarea>
              </div>
            </div>
            {/* <!-- End Grid --> */}
            <button className="border bg-[#B88A4D] text-white w-60 text-start border-[#B88A4D] mt-10 py-2 px-4 hover:bg-white hover:text-[#B88A4D]">
              Send Enquiry
            </button>
          </form>
        </div>
        {/* <!-- End Card --> */}
      </div>
      {/* <!-- End Contact Us --> */}
    </div>
  );
}
