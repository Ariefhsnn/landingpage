import { FaBars } from "react-icons/fa";
import Image from "next/image";
import React from "react";

const Header = ({ fixed }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <div className="container mx-auto grid grid-cols-3 gap-3 ">
      <div className="p-4">
        <span className="">
          <Image
            src="/tailwindcss-logotype.svg"
            layout="fixed"
            width={150}
            height={30}
            priority
          />
        </span>
      </div>
      <div className="p-4 flex space-x-6 justify-self-center">
        <a
          href="/"
          className="font-semibold font-sans hover:text-sky-400 text-lg pt-1 hover:border-b-2 hover:border-sky-400"
        >
          Start
        </a>
        <a
          href="#about"
          className="font-bold font-sans hover:text-sky-600 text-lg pt-1 hover:border-b-2 hover:border-sky-600"
        >
          About
        </a>
        <a
          href="#project"
          className="font-bold font-sans hover:text-sky-600 text-lg pt-1 hover:border-b-2 hover:border-sky-600"
        >
          Project
        </a>
        <a
          href="#contact"
          className="font-bold font-sans hover:text-sky-600 text-lg pt-1 hover:border-b-2 hover:border-sky-600"
        >
          Contact
        </a>
      </div>
      <div className="p-4 justify-self-end">
        <button className="rounded-md p-1.5 align-middle bg-neutral-600 px-4 font-semibold text-white hover:bg-sky-600">
          Get in Touch
        </button>
      </div>
      <div className="p-4 justify-self-end">
        <button className="rounded-md p-1.5 align-middle bg-neutral-600 px-4 font-semibold text-white hover:bg-sky-600">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Header;
