"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { usePathname } from "next/navigation";

const navColor = "#ecf0f3";
const navTextColor = "#1f2937";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState(navColor);
  const [linkColor, setlinkColor] = useState(navTextColor);
  const pathname = usePathname();

  useEffect(() => {
    if (
      pathname === "/property" ||
      pathname === "/crypto" ||
      pathname === "/netflix" ||
      pathname === "/twitch"
    ) {
      setNavBg("transparent");
      setlinkColor(navColor);
    } else {
      setNavBg(navColor);
      setlinkColor(navTextColor);
    }
  }, [pathname]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      // style={{ backgroundColor: `${navBg}`}}
      className={
        shadow
          ? "fixed w-full h-20 shadow-md z-[100] bg-gradient-to-r from-indigo-50 to-white via-white"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
        <Link href="/">
          <Image
            src={require("../../public/assets/navbarLogo.png")}
            alt="/"
            width="250"
            height="250"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 py-1 text-sm uppercase hover:border-b">
                Home
              </li>
            </Link>
            <Link href="#services">
              <li className="ml-10 py-1 text-sm uppercase hover:border-b">
                Services
              </li>
            </Link>
            <Link href="#stack">
              <li className="ml-10 py-1 text-sm uppercase hover:border-b">
                Stack
              </li>
            </Link>
            <Link href="#faq">
              <li className="ml-10 py-1 text-sm uppercase hover:border-b">
                FAQ
              </li>
            </Link>
            {/* <Link href="#projects">
              <li className="ml-10 py-1 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link> */}
            {/* <Link href="#contact"> */}
            {/* <li className="ml-10 text-sm uppercase hover:border-b"> */}
            <li>
              <button
                className="hover:animate-pulse ml-7 py-1 px-3 text-white rounded-lg text-sm uppercase hover:border-b shadow-lg"
                onClick={() => (window.location.href = "#contact")}
              >
                Contact
              </button>
            </li>
            {/* </Link> */}
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu style={{ color: `${linkColor}` }} size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-full h-full bg-gradient-to-br from-indigo-50 to-white p-10 ease-in duration-500"
              : "fixed left-[-250%] top-0 w-full h-full bg-gradient-to-br from-indigo-50 to-white p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image
                  src={require("../../public/assets/navbarLogo.png")}
                  width="150"
                  height="150"
                  alt="/"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="#services">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Services
                </li>
              </Link>
              <Link href="#stack">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Stack
                </li>
              </Link>
              <Link href="#faq">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  FAQ
                </li>
              </Link>
              {/* <Link href="#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link> */}
              <Link href="#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            {/* <div className="pt-10">
              <p className="uppercase tracking-widest text-[#565120e5]">
                Let&apos;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
