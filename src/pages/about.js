import React from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/zy-profile-pic.jpg";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="About Me"
            className="mb-16 lg:!text-7xl sm:text6xl xs:!4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-8 items-center sm:gap-8 xl:items-center ">
            {/* Biography Section */}
            <div className="col-span-4 lg:col-span-4 md:col-span-8 sm:col-span-8 md:order-2">
              <h2 className="mb-4 text-xl font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium leading-7">
                Hi, I'm Heng Zi Ying, a recent Computer Science graduate from
                Monash University (November 2024), with a CGPA of 3.8. I am
                passionate about software development.Throughout my studies, I
                have been building strong foundation in computing such as
                building applications, designing databases, and implementing
                user interfaces. My technical expertise includes proficiency in
                Python, Java, JavaScript, and React.js and also complemented by
                experience with Git.
              </p>
              <p className="my-4 font-medium leading-7">
                During my academic journey, I gained valuable internship
                experience working as a software engineer on client-focused
                projects, debugging production issues, and implementing new
                features.
              </p>
              <p className="font-medium leading-7">
                I am eager to apply my skills to solve real-world problems and
                am actively seeking full-time opportunities that will allow me
                to grow as a developer while contributing meaningfully to
                impactful projects.
              </p>
            </div>

            {/* Profile Picture Section */}
            <div className="col-span-4 flex items-center justify-center lg:col-span-4 md:col-span-8 sm:col-span-8 md:order-1">
              <div className="w-3/4 h-auto border-2 border-solid border-dark rounded-md overflow-hidden p-10">
                <Image
                  src={profilePic}
                  alt="Zi Ying Heng"
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
