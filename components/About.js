import React from "react";
import Image from "next/image";
import profile from "../public/linkedin.jpg";
import coder from "../public/programmer.png";
import BackgroundAnimation from "./BackgroundAnimation";
import dev from "../public/undraw.png";

const About = () => {
  return (
    <div className="container mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className=" lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Front End Developer
          </h1>

          <div className="mt-6 text-gray-800 dark:text-white">
            <h4 className="text-2xl font-bold text-gray-400 lg:text-3xl dark:text-white">
              React.Js-Node.Js-Next.Js-Tailwind CSS
            </h4>
          </div>
        </div>

        <div className="flex-shrink-0 lg:mt-12 lg:px-4  mb-10">
          <BackgroundAnimation />
          <Image
            src={coder}
            alt="Profile"
            priority={true}
            // className="rounded-lg"
            width={250}
            height={250}
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
