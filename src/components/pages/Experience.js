import React, { useState } from "react";
import LineGradient from "../../hooks/LineGradient";

const Experience = () => {
  const [isButton, setIsButton] = useState(false);
  return (
    <div className="w-5/6 mx-auto">
      <div>
        <h1 className="font-bold text-[50px] my-6">
          <span className="text-red font-bold">MY </span>EXPERIENCE
        </h1>
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
            ? "block grid grid-cols md:grid-cols-2 lg:grid-cols-3"
            : "hidden"
        }
      >
        <div className="bg-[#0A1929] p-4">
          <b className="bg-black px-3 py-2 mb-4 rounded">Education</b>
          <div className="relative">
            <h2 className="">2014-2016</h2>
            <i className="absolute top-0 left-12">SSC</i>
            <h1>Jagdal Dhakil Madrasah</h1>
          </div>
          <LineGradient></LineGradient>
          <h2>2016-2018</h2>
          <h1>Jagdal Dhakil Madrasah</h1>
          <LineGradient></LineGradient>
          <h2>2014-2016</h2>
          <h1>Jagdal Dhakil Madrasah</h1>
        </div>
        <div className="bg-[#0A1929]">
          <h1>Skill</h1>
        </div>
        <div className="bg-[#0A1929]">
          <h1>Cirtificate</h1>
        </div>
      </div>
      <div
        className={
          isButton
            ? "hidden"
            : "block  grid grid-cols md:grid-cols-2 lg:grid-cols-3"
        }
      >
        <div>
          <h1>BNCC</h1>
        </div>
        <div>
          <h1>BADHON</h1>
        </div>
      </div>
    </div>
  );
};

export default Experience;
