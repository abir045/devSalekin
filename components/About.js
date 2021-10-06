import React from "react";
import Image from "next/image";
import profile from "../public/linkedin.jpg";
import BackgroundAnimation from "./BackgroundAnimation";

const About = () => {
  return (
    <div className="container  mx-auto">
      <div className="lg:space-x-5 lg:flex lg:flex-row item-center lg:-mx-4 flex flex-col-reverse text-center lg:text-left">
        <div className="lg:px-4 lg:mt-12 ">
          <h1 className="text-2xl font-bold text-gray-900 lg:text-5xl dark:text-white">
            Front End Developer
          </h1>

          <div className="mt-6 text-gray-800 dark:text-white">
            <h4 className="text-2xl font-bold text-gray-400 lg:text-3xl dark:text-white">
              React.Js-Node.Js-Next.Js
            </h4>
            {/* <p className="mb-4">
              I am a frontend developer with a passion to build dynamic products
              with the most updated technologies.Currently I am working as a
              freelance Developer.
              <br />
              Currently developing apps on React, Redux, Node Js, and
              contributing to open source in my free time. New to Next.js,
              Tailwindcss.
            </p> */}
          </div>
        </div>

        <div className="flex-shrink-0 lg:mt-12 lg:px-4 mb-10">
          <BackgroundAnimation />
          <Image
            src={profile}
            alt="Profile"
            priority={true}
            className="rounded-full"
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
