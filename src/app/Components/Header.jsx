"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import mylogo from '../Img/logo(1).svg'
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";


export default function Navbars() {
  const [open, setOpen] = useState(false);
  const menuLinks = [
    { name: "Ik huur", link: "/" },
    { name: "Ik zoek", link: "" },
    { name: "Over ons", link: "/" },
    { name: "Projecten", link: "/" },
  ];

  return (
    <nav className="fixed font-poppins font-sans w-full left-0 top-0 z-[9999] mypad myblicker bg-white">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <div className="mx-7 w-[150px]">
          <Image src={mylogo} alt="logo" className=" w-[150px] object-fill" />
        </div>

        <div className="text-gray-900 md:block hidden px-7 py-2 font-medium">
          <ul className="flex items-center flex-wrap font-poppins font-sans p-5 text-sm">
            {menuLinks.map((menu, i) => (
              <li
                key={i}
                className="px-3 text-slate-950 font-poppins font-sans hover:text-white"
              >
                <Link href={menu.link}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center justify-center gap-3 text-2xl">
          
          <div className="">
            <IoSearchOutline />
          </div>

          <div className="">
            <CgProfile />
          </div>

        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? "text-gray-200" : "text-gray-100"
          } text-3xl md:hidden m-5`}
        >
          <svg
            className="w-8 h-8 text-slate-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              ></path>
            )}
          </svg>
        </div>
        <div
          className={`md:hidden text-gray-900 absolute w-full h-screen px-7 py-2 font-medium bg-blue-500 top-0 duration-300 ${
            open ? "right-0" : "right-[-100%]"
          }`}
        >
          <ul className="flex flex-col justify-center h-full text-white gap-10 py-2 text-lg">
            {menuLinks.map((menu, i) => (
              <li
                onClick={() => setOpen(false)}
                key={i}
                className="px-6 hover:text-slate-900"
              >
                <Link href={menu.link}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}