import ActiveLink from "./ActiveLink";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const navigation = [
  { name: "Start", href: "/" },
  { name: "About", href: "/about" },
  { name: "Project", href: "/project" },
  { name: "Contact", href: "/contact" },
  { name: "Weather", href: "/Weather " },
];

const Header = () => {
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
      <div className="p-4 flex space-x-6 justify-self-center ">
        {navigation.map((item) => (
          <ActiveLink key={item.name} href={item.href}>
            <a
              className="nav-link font-semibold font-sans hover:text-sky-400 text-lg pt-1
            hover:border-b-2 hover:border-sky-400"
            >
              {item.name}
            </a>
          </ActiveLink>
        ))}
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
