import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import LineGradient from "../../hooks/LineGradient";

const Details = () => {
  const [singleData, setSingleData] = useState("");
  const { id } = useParams();
  console.log(singleData);

  useEffect(() => {
    fetch("/fake.json")
      .then((res) => res.json())
      .then((data) => {
        const filterd = data.find((d) => d.id === parseFloat(id));
        setSingleData(filterd);
      });
  }, [id]);

  return (
    <section className="w-5/6 mx-auto my-28">
      <div>
        <h1 className="text-2xl font-bold text-center my-5">
          {singleData.name}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-5">
          <img className="w-full h-56" src={singleData.img1} alt="" />
          <img className="w-full h-56" src={singleData.img2} alt="" />
          <img className="w-full h-56" src={singleData.img3} alt="" />
        </div>
        <LineGradient></LineGradient>
        <div>
          <h1 className="text-2xl font-bold text-center my-5">
            Product Details
          </h1>
          <h2>{singleData.desc}</h2>
          <div className="mt-10 flex justify-center gap-5">
            <a
              className="py-3 px-5 rounded bg-[#0A1929]"
              href={singleData.liveURl}
              target="_blank"
            >
              Live Site
            </a>
            <a
              className="py-3 px-5 rounded bg-[#0A1929]"
              href={singleData.clientCode}
              target="_blank"
            >
              Client Code
            </a>
            <a
              className="py-3 px-5 rounded bg-[#0A1929]"
              href={singleData.serverCode}
              target="_blank"
            >
              Server Code
            </a>
          </div>
          <Link
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            to="/"
          >
            Back To Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Details;
