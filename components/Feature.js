import { BiLike } from "react-icons/bi";
import { FiCoffee } from "react-icons/fi";
import React from "react";
import { VscTools } from "react-icons/vsc";

const Feature = () => {
  return (
    <div>
      <div className="container mx-auto grid grid-rows-1 gap-1 m-10 justify-items-center">
        <p className=" uppercase bg-blue-200 mt-20 font-semibold px-4 text-sky-600 rounded-xl justify-self-center tracking-normal">
          {" "}
          f e a t u r e s{" "}
        </p>
        <h1 className="text-5xl font-semibold my-5"> Our Core Feature </h1>
        <p className="text-gray-500 lg:text-base md:text-xl text-center">
          Digital marketing is new age marketing method of the global realm.{" "}
          with the internet finding its application.
        </p>
        <div className="container mx-auto grid lg:grid-cols-3 gap-3 mt-20">
          <div className="relative">
            <BiLike
              size="75"
              color="white"
              className="bg-yellow-400 rounded-full p-5 float-left ml-14 shadow-lg mt-0 mb-10 absolute"
            />
            <div className="bg-orange-100 mt-10 pt-20 pb-20 rounded-md static">
              <h2 className="font-semibold ml-14 text-2xl align-top">
                Effective strategy{" "}
              </h2>
              <p className="mx-14 mt-7 text-gray-500 lg:text-base md:text-xl">
                We steer a path through the limitless possibility of digital,
                making business challanges opportunities for growth.
              </p>
            </div>
          </div>

          <div className="relative">
            <VscTools
              size="75"
              color="white"
              className="bg-green-400 rounded-full p-5 float-left ml-14 shadow-lg mt-0 mb-10 absolute"
            />
            <div className="bg-cyan-100 mt-10 pt-20 pb-20 rounded-md static">
              <h2 className="font-semibold ml-14 text-2xl align-top">
                Powerful Tools
              </h2>
              <p className="mx-14 mt-7 text-gray-500 lg:text-base md:text-xl">
                We steer a path through the limitless possibility of digital,
                making business challanges opportunities for growth.
              </p>
            </div>
          </div>
          <div className="relative">
            <FiCoffee
              size="75"
              color="white"
              className="bg-red-400 rounded-full p-5 float-left ml-14 shadow-lg mt-0 mb-10 absolute"
            />
            <div className="bg-red-100 mt-10 pt-20 pb-20 rounded-md static">
              <h2 className="font-semibold ml-14 text-2xl align-top">
                Great experience
              </h2>
              <p className="mx-14 mt-7 text-gray-500 lg:text-base md:text-xl">
                We steer a path through the limitless possibility of digital,
                making business challanges opportunities for growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
