import React from "react";
import Link from "next/link";

export default function FavouriteProjects() {
  return (
    <div className="container bg-[#F1F1F1] w-full -mt-40 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center">
            Featured Projects
          </h1>
        </header>

        {/* Grid starts here */}
        <div className="grid lg:grid-cols-1 md:grid-cols-2 gap-8 lg:-mt-8 pb-40">
          {/* Single card */}
          <a
            href="https://github.com/abir045/coffeeroasters"
            target="_blank"
            className="w-full block col-span-3  shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/Screenshot-coffeeroasters.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                coffeeroasters
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
            </div>
          </a>

          <a
            href="https://photosnap-abir045.vercel.app/"
            target="_blank"
            className="w-full block col-span-3 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/photosnap-desktop.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Photosnap Multipage website with React and Tailwind
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                02
              </h1>
            </div>
          </a>

          <a
            href="https://github.com/abir045/cryptoApp"
            target="_blank"
            className="w-full block col-span-3  shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/crypto.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                CryptoWorld
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                03
              </h1>
            </div>
          </a>

          <a
            href="https://pearsonairportlimousines.com/"
            target="_blank"
            className="w-full block col-span-3 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/pearson.JPG"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Pearson Airport Limousines
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                04
              </h1>
            </div>
          </a>

          <a
            href="https://github.com/abir045/Netflix_React_Tailwind"
            target="_blank"
            className="w-full block col-span-3  shadow-2xl"
          >
            <div className="relative overflow-hidden shadow-2xl">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="/netflix_clone.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Netflix Clone with React and Tailwind CSS
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                05
              </h1>
            </div>
          </a>
          <a
            href="https://github.com/abir045/frontend-mentor-manage-landing-react-tailwind"
            target="_blank"
            className="w-full block col-span-3  shadow-2xl"
          >
            <div className="relative overflow-hidden shadow-2xl">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="/manage_landing.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Frontend Mentor Manage Landing Page with Tailwind CSS
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                06
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
