import { BsArrowRight } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa";
import { IoIosGlobe } from "react-icons/io";
import { MdBusinessCenter } from "react-icons/md";
import { MdDesignServices } from "react-icons/md";
import React from "react";

const Service = () => {
  return (
    <div className="container mx-auto lg:grid grid-cols-2 gap-2">
      <div className="py-32">
        <button className="uppercase bg-blue-200 font-semibold px-4 text-sky-600 rounded-xl disabled:">
          s e r v i c e
        </button>
        <h1 className="text-6xl font-semibold my-10">
          What We Can Do For You?
        </h1>
        <p className="text-gray-500 mr-16 lg:text-base md:text-xl">
          Dolore dolor velit magna labore. Anim velit ad sint sint id elit velit
          culpa aliqua voluptate sit. Excepteur cupidatat minim Lorem dolore
          cillum reprehenderit laborum incididunt. Culpa cillum aute voluptate
          irure nostrud sit.
        </p>
        <button className="p-2  px-4 text-lg font-semibold bg-sky-500 text-white hover:bg-sky-400 rounded mt-10 shadow-md">
          Explore Services <BsArrowRight className="inline" />
        </button>
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-8 gap-4">
        <div className="grid grid-rows-2 lg:gap-8 gap-4">
          <a
            href="#webdev"
            className="rounded-xl hover:border-b-8 pt-4 pb-6 hover:border-sky-500 md:p-4 bg-white shadow-xl"
          >
            <IoIosGlobe
              size="65"
              color="white"
              className="bg-sky-600 rounded-full p-3 ml-10 mt-5 shadow-lg"
            />
            <div className="mt-7">
              <h2 className="lg:text-lg md:text-2xl sm:text-xl font-semibold mx-10">
                {" "}
                Web Development{" "}
              </h2>
              <p className="mt-5 mx-10 text-gray-500 lg:text-base md:text-xl">
                {" "}
                Dolore dolor velit magna labore. Anim velit ad sint sint id elit
                velit culpa aliqua voluptate sit. Excepteur cupidatat minim
                Lorem.
              </p>
            </div>
          </a>

          <a
            href="#marketing"
            className="rounded-xl hover:border-b-8 pt-4 pb-6 hover:border-sky-500 bg-white shadow-xl"
          >
            <FaChartBar
              size="65"
              color="red"
              className="bg-red-200 rounded-full p-3 ml-10 mt-5 shadow-lg"
            />
            <div className="mt-7">
              <h2 className="lg:text-lg md:text-2xl sm:text-xl font-semibold mx-10">
                {" "}
                Digital Marketing{" "}
              </h2>
              <p className="mt-5 mx-10 text-gray-500 lg:text-base md:text-xl">
                {" "}
                Dolore dolor velit magna labore. Anim velit ad sint sint id elit
                velit culpa aliqua voluptate sit. Excepteur cupidatat minim
                Lorem.
              </p>
            </div>
          </a>
        </div>
        <div className="grid grid-rows-2 gap-8">
          <a
            href="#design"
            className="rounded-xl hover:border-b-8 pt-4 pb-6 hover:border-sky-500 bg-white shadow-xl"
          >
            <div>
              {" "}
              <MdDesignServices
                size="65"
                color="green"
                className="bg-green-200 rounded-full p-3 ml-10 mt-5 shadow-lg"
              />
            </div>
            <div className="mt-7">
              <h2 className="lg:text-lg md:text-2xl sm:text-xl font-semibold mx-10">
                {" "}
                UI/UX Design{" "}
              </h2>
              <p className="mt-5 mx-10 text-gray-500 lg:text-base md:text-xl">
                {" "}
                Dolore dolor velit magna labore. Anim velit ad sint sint id elit
                velit culpa aliqua voluptate sit. Excepteur cupidatat minim
                Lorem.
              </p>
            </div>
            <div></div>
          </a>
          <a
            href="#bussines"
            className="rounded-xl hover:border-b-8 pt-4 pb-6 hover:border-sky-500 bg-white shadow-xl"
          >
            <div>
              <MdBusinessCenter
                size="65"
                color="orange"
                className="bg-orange-200 rounded-full p-3 ml-10 mt-5 shadow-lg"
              />
              <div className="mt-7">
                <h2 className="lg:text-lg md:text-2xl sm:text-xl font-semibold mx-10">
                  {" "}
                  Business Strategy{" "}
                </h2>
                <p className="mt-5 mx-10 text-gray-500 lg:text-base md:text-xl">
                  {" "}
                  Dolore dolor velit magna labore. Anim velit ad sint sint id
                  elit velit culpa aliqua voluptate sit. Excepteur cupidatat
                  minim Lorem.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;
