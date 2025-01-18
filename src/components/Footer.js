import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full font-medium text-center pt-0 sm:text-base">
      <Layout className="py-8">
        <span>{new Date().getFullYear()} &copy; Heng Zi Ying | Portfolio</span>
      </Layout>
    </footer>
  );
};

export default Footer;
