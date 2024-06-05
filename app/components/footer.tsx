import { FaCreditCard } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="   shadow-xl p-10 border-t-2 mt-10">
      <div className="container flex flex-col gap-5 items-center md:flex-row md:justify-between">
        <p className="flex space-x-2 items-center">
          <span>2024</span> &copy; Achintya Solutions
        </p>
        <p>Design and Develop by Achintya Solutions</p>
      </div>
    </footer>
  );
};

export default Footer;
