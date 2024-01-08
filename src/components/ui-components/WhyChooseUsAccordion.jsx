"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  IoPeopleOutline,
  IoPlanetOutline,
  IoTimerOutline,
} from "react-icons/io5";
import { TbClover, TbCut } from "react-icons/tb";
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
              <IoPlanetOutline
                className={`${
                  open === 1 ? "text-[#B88A4D]" : "text-gray-400"
                } text-2xl `}
              />
            </div>
            <p>Your Vision, Our Mission</p>
          </div>
        </AccordionHeader>
        <AccordionBody>
          Choosing DeniCrafts means choosing a partner that is committed to
          bringing your vision to life. We see each project as a collaboration,
          understanding your unique requirements and translating them into
          beautifully crafted solutions that seamlessly blend with your
          lifestyle.
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
              <TbCut
                className={`${
                  open === 2 ? "text-[#B88A4D]" : "text-gray-400"
                } text-2xl `}
              />
            </div>
            <p>Tailored for You</p>
          </div>
        </AccordionHeader>
        <AccordionBody>
          Your home is an extension of yourself, and we believe that every piece
          of carpentry should reflect your personality. DeniCrafts specializes
          in tailoring solutions that go beyond expectations, ensuring that your
          living spaces are as unique as you are.
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
              <IoTimerOutline
                className={`${
                  open === 3 ? "text-[#B88A4D]" : "text-gray-400"
                } text-2xl `}
              />
            </div>
            <p>Reliability, Every Time</p>
          </div>
        </AccordionHeader>
        <AccordionBody>
          Time is of the essence, and we value yours. DeniCrafts is synonymous
          with reliability and timely delivery. When you choose us, you choose a
          partner who understands the importance of deadlines and ensures that
          your project is completed to perfection, as promised.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4}>
        <AccordionHeader onClick={() => handleOpen(4)}>
          <div className="flex items-center gap-3">
            <div
              className={`rounded-full ${
                open === 4 ? "border-[#B88A4D]" : "text-gray-400"
              } p-2 border `}
            >
              <TbClover
                className={`${
                  open === 4 ? "text-[#B88A4D]" : "text-gray-400"
                } text-2xl `}
              />
            </div>
            <p>Crafting Memories, One Piece at a Time</p>
          </div>
        </AccordionHeader>
        <AccordionBody>
          More than carpentry, we are in the business of crafting memories.
          DeniCrafts believes that every piece we create contributes to the
          stories and memories of your home. Choose us, and let's craft a legacy
          together, one piece at a time.
        </AccordionBody>
      </Accordion>
    </>
  );
}
