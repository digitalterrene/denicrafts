import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <div
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/side-view-worker-using-drill_23-2149916248.jpg?size=626&ext=jpg&uid=R86751016&ga=GA1.1.1135384207.1703006759&semt=sph')`,
      }}
      className=" p-12 lg:p-28 bg-no-repeat bg-center space-y-8 lg:space-y-0  text-white bg-cover gap-8  lg:grid grid-cols-4"
    >
      <div className="space-y-3">
        {" "}
        <a href="/">
          <img className="w-40" src="/brand/logo.png" />
        </a>
        <p className="text-white">
          DeniCrafts, a premier carpentry contractor based in Johannesburg, is
          dedicated to delivering exceptional craftsmanship and transformative
          carpentry solutions. Specializing in a diverse range of services, we
          bring life to spaces through custom woodwork, intricate built-in
          solutions, and precise installations of doors, ceilings, and flooring.
        </p>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#B88A4D]"></div>
          <p>CONTACT INFORMATION</p>
        </div>
        <div className="flex gap-2 items-start text-2xl">
          <IoLocationOutline />
          <p className="text-sm">Johannesburg, Gauteng, South Africa</p>
        </div>
        <div className="flex gap-2 items-start text-2xl">
          <FiPhone />
          <p className="text-sm">062 896 7314</p>
        </div>
        <div className="flex gap-2 items-start text-2xl">
          <FaWhatsapp />
          <p className="text-sm">073 910 6660</p>
        </div>
        <div className="flex gap-2 items-start text-2xl">
          <AiOutlineMail />
          <p className="text-sm">dennis.muzamana@gmail.com</p>
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-1 bg-[#B88A4D]"></div>
          <p>WORKING HOURS</p>
        </div>
        <div className=" gap-2 items-start  ">
          <p>Monday To Friday :</p>
          <p className="text-sm">07:00 AM to 18:00 PM</p>
        </div>
        <div className=" gap-2 items-start  ">
          <p>Saturday :</p>
          <p className="text-sm">08:00 AM to 17:00 PM</p>
        </div>
        <div className=" gap-2 items-start  ">
          <p>Sunday :</p>
          <p className="text-sm">07:00 AM to 18:00 PM</p>
        </div>
      </div>
      <div className=" ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.91032990071!2d27.957623187632684!3d-26.171343975131446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg!5e0!3m2!1sen!2sza!4v1703928302781!5m2!1sen!2sza"
          className="w-full h-full"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
