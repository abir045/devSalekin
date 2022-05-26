import React from "react";
import Link from "next/link";

export default function FavouriteProjects() {
  return (
    <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900">
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
            href="https://world-of-crypto.netlify.app/"
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
                01
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
                02
              </h1>
            </div>
          </a>
          {/* Single card */}
          {/* <a
            href="https://demostore2.herokuapp.com/"
            className="w-full block col-span-3  shadow-2xl"
          >
            <div className="relative overflow-hidden">
              
              <img
                src="/alvaro.JPG"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Alvaro E-Commerce
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                02
              </h1>
            </div>
          </a> */}
          {/* Single card */}
          <a
            href="https://abir045.github.io/covid19/"
            target="_blank"
            className="w-full block col-span-3  shadow-2xl"
          >
            <div className="relative overflow-hidden shadow-2xl">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="/covid-19.jpg"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Covid-19 Dashboard
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                03
              </h1>
            </div>
          </a>
          <a
            href="https://github.com/abir045/Outlaws-Ecommerce"
            target="_blank"
            className="w-full block col-span-3  shadow-2xl"
          >
            <div className="relative overflow-hidden shadow-2xl">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="/outlaws.png"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Outlaws-Ecommerce
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                04
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
