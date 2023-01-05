import React, { useState } from "react";
import LineGradient from "../../hooks/LineGradient";

const Experience = () => {
  const [isButton, setIsButton] = useState(false);
  return (
    <div>
      <div className="w-5/6 mx-auto my-20">
        <div>
          <div className="relative">
            <p className="text-yellow font-bold">My Experience</p>
            <p className="absolute h-[3px] w-12 top-[13px] left-32 bg-gradient-rainblue"></p>
            <h1 className="font-bold text-[50px] mb-6 mt-2">
              <span className="text-red font-bold">MY </span>EXPERIENCE
            </h1>
          </div>
          <button
            onClick={() => setIsButton(!isButton)}
            className={
              isButton
                ? "bg-gradient-rainblue border-white border rounded py-2 px-3 mr-2"
                : " border-white border rounded py-2 px-3 mr-2"
            }
          >
            Education & Skill
          </button>
          <button
            onClick={() => setIsButton(!isButton)}
            className={
              isButton
                ? " border-white border rounded py-2 px-3 mr-2"
                : "bg-gradient-rainblue border-white border rounded py-2 px-3 mr-2"
            }
          >
            Experience
          </button>
        </div>
        <div
          className={
            isButton
              ? "block grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"
              : "hidden"
          }
        >
          <div className="bg-[#0A1929] p-6 rounded-md">
            <b className="bg-black px-3 py-2 rounded">Education</b>
            <div className="relative mt-8 mb-4">
              <h2 className="">2014-2016</h2>
              <i className="absolute top-0 left-20">- SSC</i>
              <h1>Jagdal Dhakil Madrasah</h1>
            </div>
            <LineGradient></LineGradient>
            <div className="relative my-4">
              <h2 className="">2016-2018</h2>
              <i className="absolute top-0 left-20">- HSC</i>
              <h1>Dui Para Alim Madrasah</h1>
            </div>
            <LineGradient></LineGradient>
            <div className="relative my-2">
              <h2 className="">2019-2023</h2>
              <i className="absolute top-0 left-20">- BA HONS</i>
              <h1>University of Dhaka</h1>
            </div>
          </div>
          <div className="bg-[#0A1929] p-6 rounded-md">
            <b className="bg-black px-3 py-2 rounded">Skill</b>
            <div className="grid grid-cols-2 my-4">
              <h1 className="bg-white text-black mr-4 py-1 px-2 rounded hover:shadow-xl hover:shadow-black text-center hover:translate-y-[-2px] duration-50">
                HTML
              </h1>
              <h1 className="bg-white text-black mr-4 py-1 px-2 rounded hover:shadow-xl hover:shadow-black text-center hover:translate-y-[-2px] duration-50">
                CSS
              </h1>
            </div>
            <div className="grid grid-cols-2 my-4">
              <h1 className="bg-white text-black mr-4 py-1 px-2 rounded hover:shadow-xl hover:shadow-black text-center hover:translate-y-[-2px] duration-50">
                BOOTSTRAP
              </h1>
              <h1 className="bg-white text-black mr-4 py-1 px-2 rounded hover:shadow-xl hover:shadow-black text-center hover:translate-y-[-2px] duration-50">
                TAILWIND CSS
              </h1>
            </div>
            <div className="grid grid-cols-2 my-4">
              <h1 className="bg-white text-black mr-4 py-1 px-2 rounded hover:shadow-xl hover:shadow-black text-center hover:translate-y-[-2px] duration-50">
                JABASCRIPT
              </h1>
              <h1 className="bg-white text-black mr-4 py-1 px-2 rounded hover:shadow-xl hover:shadow-black text-center hover:translate-y-[-2px] duration-50">
                REACT JS
              </h1>
            </div>
            <div className="grid grid-cols-2 my-4">
              <h1 className="bg-white text-black mr-4 py-1 px-2 rounded hover:shadow-xl hover:shadow-black text-center hover:translate-y-[-2px] duration-50">
                REDUX
              </h1>
              <h1 className="bg-white text-black mr-4 py-1 px-2 rounded hover:shadow-xl hover:shadow-black text-center hover:translate-y-[-2px] duration-50">
                NODE JS
              </h1>
            </div>
            <div className="grid grid-cols-2 my-4">
              <h1 className="bg-white text-black mr-4 py-1 px-2 rounded hover:shadow-xl hover:shadow-black text-center hover:translate-y-[-2px] duration-50">
                EXPRESS JS
              </h1>
              <h1 className="bg-white text-black mr-4 py-1 px-2 rounded hover:shadow-xl hover:shadow-black text-center hover:translate-y-[-2px] duration-50">
                MONGO DB
              </h1>
            </div>
            <h1 className="bg-white text-black mr-4 py-1 px-2 rounded hover:shadow-xl hover:shadow-black text-center hover:translate-y-[-2px] duration-50 inline-block">
              FIREBASE
            </h1>
          </div>
          <div className="bg-[#0A1929] rounded-md p-6">
            <b className="bg-black px-3 py-2 rounded">Cirtificate</b>
            <div className="relative my-6">
              <h2 className="">2022-July to 2022-Dec</h2>
              <h1>Complete Web Development</h1>
              <h1>Programming Hero</h1>
            </div>
            <LineGradient></LineGradient>
          </div>
        </div>
        <div
          className={
            isButton
              ? "hidden"
              : "block  grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10"
          }
        >
          <div className="bg-[#0A1929] rounded-md p-6">
            <b className="bg-black px-3 py-2 rounded">BNCC</b>
            <div className="relative my-6">
              <h2 className="">2019-Jan to 2022-Dec</h2>
              <h1>Cadet Corporal</h1>
              <h1>Bncc Air Wing University of Dhaka</h1>
            </div>
            <LineGradient></LineGradient>
          </div>
          <div className="bg-[#0A1929] rounded-md p-6">
            <b className="bg-black px-3 py-2 rounded">BADHON</b>
            <div className="relative my-6">
              <h2 className="">2019-Jan to 2022-Dec</h2>
              <h1>Joint Secretary</h1>
              <h1>Shahid Sergeant Zahurul Haque Hall University of Dhaka</h1>
            </div>
            <LineGradient></LineGradient>
          </div>
        </div>
      </div>
      <LineGradient></LineGradient>
    </div>
  );
};

export default Experience;
