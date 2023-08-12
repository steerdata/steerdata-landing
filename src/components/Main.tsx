"use client";
import { useState, useEffect } from "react";
import Typed from "react-typed";
import { HiChevronDown } from "react-icons/hi";

const Main = () => {
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLink(true);
    }, 1000);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShowLink(false);
      } else {
        setShowLink(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id="home"
      className="w-full h-screen text-center bg-gradient-radial from-white via-transparent to-transparent"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-gray-700">
            Experts in <br />
            Data <Typed
              className="text-[#5651e5]"
              strings={[
                "Engineering.",
                "Architecture.",
                "Science.",
              ]}
              typeSpeed={40}
              backSpeed={50}
              backDelay={3000}
              loop
            />
          </h1>
          <p className="py-4 text-gray-600 max-w-[65%] m-auto">
            We help you build cost-efficient, fast and scalable data
            solutions in both cloud and on-premise.
          </p>
          <div className="py-4">
            <button
              className="hover:animate-pulse text-white py-3 px-5 rounded-lg shadow-lg hover:scale-110 transition duration-300 ease-in-out"
              onClick={() => (window.location.href = "#contact")}
            >
              Get in Touch
            </button>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hover:animate-pulse hover:scale-110 transition duration-300 ease-in-out">
            <a href="#services">
              <div
                className={`rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer ${
                  showLink ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transition: 'opacity 1s',
                  transitionDelay: showLink ? '0s' : '1s',
                }}
              >
                <HiChevronDown
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
