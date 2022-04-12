import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="container mx-auto grid lg:grid-cols-2 gap-2 mt-40 mb-40">
      <div className="align-middle lg:justify-self-center">
        <img src="/1.png" priority className="w-full h-full " />
      </div>
      <div>
        <button className="uppercase bg-blue-200 lg:mt-20 mt-5 font-semibold px-4 text-sky-600 rounded-xl disabled:">
          a b o u t
        </button>
        <h1 className="text-6xl font-semibold mt-7">
          {" "}
          We Have 10+ Years Experience{" "}
        </h1>
        <p className="mt-10 mb-5 text-gray-500 lg:text-base md:text-xl">
          We have brought strategy design and technology to help businesses
          thrieve in a rapidly changing market. We do research and find the
          truth behind a brand and that seduce the heart of the customer
        </p>
        <p className="text-gray-500 mb-10 lg:text-base md:text-xl">
          This means print, broadcast, direct mail, phone, and outdoor
          advertising like billboards. But those processes are really
          time-consuming and costly.
        </p>
        <button className="p-2  px-4 text-lg font-semibold bg-sky-500 text-white hover:bg-sky-400 shadow-md rounded">
          Know More <BsArrowRight className="inline" />
        </button>
      </div>
    </div>
  );
};

export default About;
