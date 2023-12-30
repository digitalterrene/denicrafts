"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { IoPeopleOutline } from "react-icons/io5";
import { RiShieldStarLine } from "react-icons/ri";
import { MdOutlineSettingsSuggest } from "react-icons/md";
export function WhyChooseUsAccordion() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <div className="flex items-center gap-3">
            <div
              className={`rounded-full ${
                open === 1 ? "border-[#B88A4D]" : "text-gray-400"
              } p-2 border `}
            >
              <RiShieldStarLine
                className={`${
                  open === 1 ? "text-[#B88A4D]" : "text-gray-400"
                } text-2xl `}
              />
            </div>
            <p>12 Years Of Experience In Woodwork Business</p>
          </div>
        </AccordionHeader>
        <AccordionBody>
          Groovin' all week with you. And we'll do it our way yes our way. Make
          all our dreams come true for me and you. You wanna be where you can
          see our troubles are all the same. You wanna be where everybody knows
          Your name. It's time to play the music. Then one day he was shootin'
          at some food and up through the ground came a bubblin' crude. Oil that
          is. Here's the story of a lovely lady who was bringing
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          <div className="flex items-center gap-3">
            <div
              className={`rounded-full ${
                open === 2 ? "border-[#B88A4D]" : "text-gray-400"
              } p-2 border `}
            >
              <IoPeopleOutline
                className={`${
                  open === 2 ? "text-[#B88A4D]" : "text-gray-400"
                } text-2xl `}
              />
            </div>
            <p>More than 50 Regular Customers</p>
          </div>
        </AccordionHeader>
        <AccordionBody>
          Groovin' all week with you. And we'll do it our way yes our way. Make
          all our dreams come true for me and you. You wanna be where you can
          see our troubles are all the same. You wanna be where everybody knows
          Your name. It's time to play the music. Then one day he was shootin'
          at some food and up through the ground came a bubblin' crude. Oil that
          is. Here's the story of a lovely lady who was bringing
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          <div className="flex items-center gap-3">
            <div
              className={`rounded-full ${
                open === 3 ? "border-[#B88A4D]" : "text-gray-400"
              } p-2 border `}
            >
              <MdOutlineSettingsSuggest
                className={`${
                  open === 3 ? "text-[#B88A4D]" : "text-gray-400"
                } text-2xl `}
              />
            </div>
            <p>Using Latest Technology In Our Work</p>
          </div>
        </AccordionHeader>
        <AccordionBody>
          Groovin' all week with you. And we'll do it our way yes our way. Make
          all our dreams come true for me and you. You wanna be where you can
          see our troubles are all the same. You wanna be where everybody knows
          Your name. It's time to play the music. Then one day he was shootin'
          at some food and up through the ground came a bubblin' crude. Oil that
          is. Here's the story of a lovely lady who was bringing
        </AccordionBody>
      </Accordion>
    </>
  );
}
