"use client";
import { MdOutlineEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaRegClock,
  FaTwitter,
} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiYoutube } from "react-icons/fi";
import React from "react";

export default function TopHeader() {
  return (
    <div className="lg:px-40 px-4 bg-[#B88A4D] text-white py-1.5 flex justify-between">
      <div className="lg:flex items-center gap-4">
        <div className="flex gap-3 text-sm items-center">
          <FaPhoneAlt className="" />
          <p>073 910 6660 || 062 896 7314</p>
        </div>
        <div className="flex gap-3 text-sm items-center">
          <FaRegClock className="" />
          <p> Mon - Sat: 9:00 - 18:00</p>
        </div>
        <div className="flex gap-3 text-sm items-center">
          <MdOutlineEmail className="" />
          <p>info@denicrafts.co.za</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex gap-3 text-sm items-center">
          <FaFacebookF className="" />
        </div>
        <div className="flex gap-3 text-sm items-center">
          <FaTwitter className="" />
        </div>
        <div className="flex gap-3 text-sm items-center">
          <FaLinkedinIn className="" />
        </div>
        <div className="flex gap-3 text-sm items-center">
          <BsInstagram className="" />
        </div>
        <div className="flex gap-3 text-sm items-center">
          <FiYoutube className="" />
        </div>
      </div>
    </div>
  );
}
