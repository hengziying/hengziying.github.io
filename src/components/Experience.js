import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;<a className="text-primary capitalize">@{company}</a>
        </h3>
        <span className="capitalize text-medium text-dark/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref, // target the ref
    offset: ["start end", "center start"], // use scroll offset
  });

  return (
    <div className="my-32">
      <h2 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:mt-16 md:mb-8">
        Experience
      </h2>
      <div className="w-[75%] mx-auto relative lg:w[90%] md:w-full">
        {/* Use motion.div for the scroll progress indicator */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w[2px] md:left-[30px] xs:left-[20px]"
        />
        <div ref={ref} className="w-full ">
          <ul className="w-full flex flex-col items-start justify-between ml-4">
            <Details
              position="Software Engineer Intern"
              company="Juris Technologies"
              time="Nov 2023 - Feb 2024"
              address="Kuala Lumpur"
              work="During my Software Engineer Internship at Juris Technologies, I developed and customized software using PHP, PHPLens, and PL/SQL, while gaining hands-on experience in web development and system configuration. I conducted User Acceptance Testing (UAT) by creating test scripts, executing tests, and providing usability feedback, and collaborated with stakeholders to gather requirements and implement new functionalities."
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
