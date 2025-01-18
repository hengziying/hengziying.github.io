import React from "react";
import Link from "next/link";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>ZY Portfolio | Contact</title>
        <meta name="description" content="any description"></meta>
      </Head>
      <TransitionEffect />
      <Layout className="pt-16">
        <AnimatedText
          text="Contact"
          className=" lg:!text-7xl sm:text6xl xs:!4xl sm:mb-8"
        />
      </Layout>
      <div className="flex justify-center w-full">
        <div className="bg-light border-2 border-dark rounded-lg p-6 max-w-lg w-full shadow-lg lg:p-8 md:p-6 sm:p-4">
          <h3 className="text-2xl font-semibold text-dark mb-4 text-center md:text-lg">
            Get in Touch
          </h3>
          <p className="text-base text-dark mb-4 text-center md:text-sm">
            Feel free to reach out through any of the following channels:
          </p>
          <div className="flex flex-col items-center gap-3 ">
            <div className="flex items-center text-lg text-dark md:text-sm">
              <span className="font-semibold mr-2">Email:</span>
              <Link href="mailto:ziyingheng@gmail.com" className="underline">
                ziyingheng@gmail.com
              </Link>
            </div>
            <div className="flex items-center text-lg text-dark md:text-sm">
              <span className="font-semibold mr-2">Phone:</span>
              <span>+60 1110621186</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
