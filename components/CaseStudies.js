import Image from "next/image";
import React from "react";

const CaseStudies = () => {
  return (
    <div className="container mx-auto grid grid-rows-1 mt-20 justify-items-center">
      <div className="justify-center">
        <p className=" uppercase bg-blue-200 mt-20 font-semibold px-4 text-sky-600 rounded-xl justify-self-center tracking-wider mb-10">
          {" "}
          case studies{" "}
        </p>
      </div>

      <h1 className="text-5xl font-semibold"> Our Featured Project </h1>
      <div className="space-x-10 mt-20 mb-10 lg:text-base md:text-xl">
        <a
          href="#all"
          className=" text-gray-600 hover:text-sky-500 hover:border-b-4 border-sky-500"
        >
          All
        </a>
        <a
          href="#app"
          className=" text-gray-600 hover:text-sky-500 hover:border-b-4 border-sky-500"
        >
          App
        </a>
        <a
          href="#branding"
          className=" text-gray-600 hover:text-sky-500 hover:border-b-4 border-sky-500"
        >
          Branding
        </a>
        <a
          href="#development"
          className=" text-gray-600 hover:text-sky-500 hover:border-b-4 border-sky-500"
        >
          Development
        </a>
        <a
          href="#uidesign"
          className=" text-gray-600 hover:text-sky-500 hover:border-b-4 border-sky-500"
        >
          UI/UX Design
        </a>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 md:justify-items-center">
        <div className="lg:p-10 shadow-2xl">
          <img
            src="/kindpng_1247334.png"
            className="lg:w-full lg:h-full w-80 h-80"
          />
        </div>
        <div className="lg:p-10 shadow-2xl">
          <img
            src="/kindpng_342438.png"
            className="lg:w-full lg:h-full w-80 h-80"
          />
        </div>
        <div className="lg:p-10 shadow-2xl">
          <img
            src="/PngItem_1247062.png"
            className="lg:w-full lg:h-full w-80 h-80"
          />
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
