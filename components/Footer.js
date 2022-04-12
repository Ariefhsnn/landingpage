import { FiSend } from "react-icons/fi";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bottom-0 p-32 bg-navy">
      <div className="container mx-auto grid lg:grid-cols-5 lg:gap-3">
        <div className="align-center lg:col-span-2 lg:row-span-2">
          <img src="/tailwindcss-logotype-white.svg" className="w-64 h-12" />
          <div className="lg:row-span-2 my-4">
            <p className=" text-lg text-slate-400 ">
              {" "}
              We Design and build beautiful websites, apps and branding for
              leading startup business{" "}
            </p>
          </div>
          <div className="mt-4">
            <form action="#" className="flex relative">
              <input
                className="bg-slate-600 py-4.5 w-full pl-8 rounded-l text-white"
                type="email"
                placeholder="Type Your Email"
              ></input>
              <div className="bg-slate-600 rounded-r">
                <button type="submit" className="pr-2 my-1 flex ">
                  <FiSend
                    size={45}
                    color="white"
                    className="bg-sky-500 rounded"
                    priority
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="grid mgrid-cols-2 gap-3 lg:col-span-3 lg:grid-cols-3">
          <div className=" justify-self-center text-lg grid grid-rows-6 sm:my-6 md:my-6">
            <div className="text-white text-lg font-semibold mb-2">About</div>
            <div className="text-slate-400 my-0.5">
              <a href="#overview">Overview</a>
            </div>
            <div className="text-slate-400 my-0.5">
              <a href="#approach">Approach</a>
            </div>
            <div className="text-slate-400 my-0.5">
              <a href="#values"> Values</a>
            </div>
            <div className="text-slate-400 my-0.5">
              <a href="#team"> Our Team </a>
            </div>
            <div className="text-slate-400 my-0.5">
              <a href="#blog">Blog & News</a>
            </div>
          </div>
          <div className="justify-self-center text-lg grid grid-rows-6 sm:my-6 md:my-6">
            <div className="text-white font-semibold mb-2">Services</div>
            <div className="text-slate-400 my-0.5">
              <a href="#branding">Branding</a>
            </div>
            <div className="text-slate-400 my-0.5">
              <a href="#product">Product Design</a>
            </div>
            <div className="text-slate-400 my-0.5">
              <a href="#dev">Development</a>
            </div>
            <div className="text-slate-400 my-0.5">
              <a href="#web">Websites</a>
            </div>
            <div className="text-slate-400 my-0.5">
              <a href="#uidesign">UI Design</a>
            </div>
          </div>
          <div className=" justify-items-center lg:col-span-1 sm:my-6 col-span-2 lg:justify-items-start lg:mt-6 text-lg grid grid-rows-6">
            <div className="text-white font-semibold mb-2">Contact Info</div>
            <div className="text-slate-400 my-0.5">Lorem Ipsum</div>
            <div className="text-slate-400 my-0.5">52 Lorem Ipsum 404</div>
            <div className="text-slate-400 my-0.5">088881111</div>
            <div className="text-slate-400 my-0.5 row-span-2">
              LoremIpsum@gmail.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
