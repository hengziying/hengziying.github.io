import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-start md:w-[80%]" // Align items to the left here
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className="w-full text-left" // Align the content to the left
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize text-medium text-dark/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref, // target the ref
    offset: ["start end", "center start"], // use scroll offset
  });

  return (
    <div className="my-32">
      <h2 className="font-bold text-8xl mb-16 w-full text-center md:text-6xl xs:mt-16 md:mb-8">
        Education
      </h2>
      <div className="w-[75%] mx-auto relative lg:w[90%] md:w-full">
        {/* Use motion.div for the scroll progress indicator */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top md:w[2px] md:left-[30px] xs:left-[20px]"
        />
        <div ref={ref} className="w-full">
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              type="Bachelor of Computer Science"
              time="Feb 2022 - Nov 2024"
              place="Monash University Malaysia"
              info="CGPA: 3.8 | Weighted Average Mark: 81"
            />
            <Details
              type="Unified Examination Certificate (UEC)"
              time="Jan 2015 - Dec 2020"
              place="Pay Fong High School"
              info="4As in Additional Mathematics I, Additional Mathematics II, English and Bahasa Melayu"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Education;
