"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface Logo {
  name: string;
  default: any;
}

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  const importAll = (r: any): Logo[] => {
    return r.keys().map((filename: string) => ({
      name: filename.replace(/^.*[\\/]/, "").split(".")[0],
      default: r(filename).default,
    }));
  };

  const logos = importAll(
    require.context("../../public/assets/skills", false, /\.(png|jpe?g|svg)$/)
  );

  useEffect(() => {
    const containerWidth = skillsRef.current?.offsetWidth || 0;
    const logoWidth = 120; // Adjust this value as needed to control the size of logos
    const numVisibleLogos = Math.floor(containerWidth / logoWidth);
    const totalLogos = logos.length;

    const scrollInterval = setInterval(() => {
      skillsRef.current?.scrollBy(logoWidth, 0);
    }, 2000); // Adjust the scroll duration (milliseconds) as needed

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div
      id="skills"
      className="w-full px-2 py-32 max-w-[1240px] mx-auto"
      ref={skillsRef}
    >
      <div className="flex flex-col justify-center h-full">
        <h2 className="col-span-3 uppercase text-xl tracking-widest text-[#5651e5]">
          Skills
        </h2>
        <div className="photobanner-container">
          <div className="photobanner">
            {logos.map((logo: Logo, index: number) => (
              <div className="p-6 flex shadow-xl rounded-xl" key={index}>
                <div className="m-auto w-[64px] h-[64px] flex items-center justify-center">
                  <Image
                    src={logo.default}
                    width={64}
                    height={64}
                    alt={logo.name}
                  />
                </div>
              </div>
            ))}
            {/* {logos.map((logo: Logo, index: number) => (
              <div
                className="p-6 shadow-xl rounded-xl"
                key={`duplicate-${index}`}
              >
                <div className="m-auto w-[64px] h-[64px] flex items-center justify-center">
                  <Image
                    src={logo.default}
                    width={64}
                    height={64}
                    alt={logo.name}
                  />
                </div>
              </div>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
