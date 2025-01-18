import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/Icon";
import project1 from "../../public/images/projects/React-Morning-Dashboard.png";
import project2 from "../../public/images/projects/FYP.png";
import project3 from "../../public/images/projects/Tetris.png";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 sm:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-5 -z-20 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto border border-dark border-solid rounded-lg "
        />
      </Link>
      <div className="w-1/2 flex flex-col items-start justfy-between pl-6 lg:w-full">
        <span className="text-primary font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 md:w-8">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, summary, github, link }) => {
  return (
    <article className="w-full flex items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative shadow-2xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-20 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded[1.5rem]" />
      <div className="w-full flex flex-col items-start justfy-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark sm:text-sm">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Projects"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="React Morning Dashboard"
                summary="A dashboard that allows users to personalize their RSS news feed experience. Users can easily add, manage, and view their favourite news sources, providing a tailored and streamlined way to stay updated on the latest topics that matter to them."
                type="Project"
                img={project1}
                link="https://hengziying.github.io/React-Morning-Dashboard/"
                github="https://github.com/hengziying/Projects/tree/main/React/morning-dashboard"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Event Management App"
                summary="A comprehensive Android application for creating, editing, categorizing, and managing events. It incorporates advanced features to enhance interactivity and user experience, building on earlier assignments."
                type="Project"
                link="https://github.com/hengziying/Projects/tree/90f03f3f0c6cf45d2d01cb4aca79d88e908e199f/Mobile%20App/Event%20Management%20App"
                github="https://github.com/hengziying/Projects/tree/90f03f3f0c6cf45d2d01cb4aca79d88e908e199f/Mobile%20App/Event%20Management%20App"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Elden Ring (Rogue-like Game)"
                summary="A text-based rouge-like game that is inspired by 'Elden Ring' using Java developed in a team of 3. This game is designed and developed using object oriented principles."
                type="Project"
                link="https://github.com/hengziying/Projects/tree/90f03f3f0c6cf45d2d01cb4aca79d88e908e199f/OOP(Java)/EldenRing(Rouge-liked_game)"
                github="https://github.com/hengziying/Projects/tree/90f03f3f0c6cf45d2d01cb4aca79d88e908e199f/OOP(Java)/EldenRing(Rouge-liked_game)"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Final Year Project: Music Separation Model"
                summary="A Convolutional Neural Network (CNN) model was developed for music separation, trained on the MUSDB18HQ dataset. The model is capable of effectively isolating key audio components, such as vocals, bass, drums, and other instruments, facilitating precise separation of musical elements for various applications."
                type="Project"
                img={project2}
                link="https://colab.research.google.com/drive/1UTlQGmp50IhMLSsw3EFR_7rMIRpCJuMp?usp=sharing"
                github="https://github.com/Lim1802/MCS14_FIT3162_SINGING_VIDEO_SEPERATION.git"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Data Visualization (Global Trade Pattern)"
                summary="Data visualization of Malaysia's global trade patterns (2020-2023) using Vega-Lite, showcasing trade routes, trade balance, growth trends, and trade value distribution across key sectors."
                type="Project"
                link="https://ziyingheng0701.github.io/FIT3179-A2/"
                github="https://github.com/hengziying/Projects/tree/90f03f3f0c6cf45d2d01cb4aca79d88e908e199f/Data%20Visualization/Global%20Trade%20Pattern%20of%20Malaysia%20(Vega-lite)"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Data Visualization (Tourism Trends)"
                summary="Interactive data visualization of Malaysia's tourism data (2016-2019) built with Tableau, featuring tourist profiles, state popularity, and trends in tourist receipts and spending growth."
                type="Project"
                link="https://public.tableau.com/app/profile/zi.ying.heng/viz/TourismMalaysia_17250926808580/Dashboard4"
                github="https://github.com/hengziying/Projects/tree/90f03f3f0c6cf45d2d01cb4aca79d88e908e199f/Data%20Visualization/Tourism%20Malaysia%20(Tableau)"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Tetris Game"
                summary="A Tetris game implemented with TypeScript and RxJS, leveraging Functional Reactive Programming (FRP) concepts."
                type="Project"
                img={project3}
                link="https://tetris-qgcv.vercel.app/"
                github="https://github.com/hengziying/Projects/tree/1e0c83267d27b92c06a287e8d2fab655cc14dc33/Javascript/Tetris"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
