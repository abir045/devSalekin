import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-18 sm:pb-36 sm:py-12 py-6">
      <div className="max-w-4xl px-4 mx-auto text-gray-800 dark:text-white">
        <div className="pb-8 mb-2 border-t-2 border-gray-300 dark:border-white-300"></div>
        <div className="flex flex-col justify-between lg:flex-row items-center">
          <p>Get in touch</p>
          <div className="flex flex-wrap py-6 sm:space-x-6 space-x-2 font-medium lg:pt-0">
            <a
              href="https://www.instagram.com/abir_salekin/"
              target="_blank"
              className="text-base font-normal text-gray-600 dark:text-gray-300"
            >
              <AiFillInstagram size={30} />
            </a>

            <a
              href="https://twitter.com/SalekinI"
              className={"transition-colors hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <FiTwitter size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/salekin-imran-b2354349/"
              className={"transition-colors hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin size={30} />
            </a>
            <a
              href="https://github.com/abir045"
              className={"transition-colors hover:text-yellow-500"}
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
