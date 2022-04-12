import { BsArrowRight } from "react-icons/bs";
import React from "react";

const Content = () => {
  return (
    <div>
      <div className="container mx-auto grid lg:grid-cols-2 gap-2">
        <div className="align-middle lg:justify-self-center ">
          <div className="pt-48">
            <img src="/1.png" priority className=" w-full h-full" />
          </div>
        </div>
        <div>
          <h1 className="lg:pt-48 text-7xl font-semibold font-sans">
            {" "}
            We're A <span className="text-sky-400">Digital Agency</span> UI/UX
            Designing{" "}
          </h1>
          <p className="py-10 lg:text-base md:text-xl text-gray-500 sm:col-span-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="p-2  px-4 text-lg font-semibold bg-sky-500 text-white hover:bg-sky-400 rounded">
            Our Services <BsArrowRight className="inline" />
          </button>
          <button className="p-2 mx-16 px-4 text-lg font-semibold bg-slate-100 shadow-md rounded">
            Know About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
