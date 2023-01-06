import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import LineGradient from "../../hooks/LineGradient";

const Services = ({ setSelectedPage }) => {
  return (
    <div id="services">
      <div className="w-5/6 mx-auto my-24">
        <div className="relative">
          <p className="text-yellow font-bold">My Services</p>
          <p className="absolute h-[3px] w-12 top-[13px] left-24 bg-gradient-rainblue"></p>
          <h1 className="font-bold text-[50px] mt-2">
            <span className="text-red font-bold">MY </span>SERVICES
          </h1>
          <p className="font-bold text-2xl mb-6 capitalize">
            I Always Try To Provide World Range <br /> of digital Services
          </p>
        </div>
        <div className="md:flex justify-between gap-4 mt-8">
          <div className="bg-[#0A1929] mb-5 md:mb-0 py-12 px-10  w-full rounded-md md:w-1/4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 text-[#93881C]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z"
              />
            </svg>

            <h1 className="my-4 text-2xl font-bold">
              Web <br /> Design
            </h1>
            <div className="relative hover:text-yellow duration-200 font-bold">
              <AnchorLink
                onClick={() => setSelectedPage("contact")}
                href="#contact"
              >
                Contact
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 absolute top-[3px] left-16"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </AnchorLink>
            </div>
          </div>
          <div className="bg-[#0A1929] mb-5 md:mb-0 py-12 px-10 w-full md:w-1/4 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 text-[#084764]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>

            <h1 className="my-4 text-2xl font-bold">Web Devlopment</h1>
            <div className="relative hover:text-yellow duration-200 font-bold">
              <AnchorLink
                onClick={() => setSelectedPage("contact")}
                href="#contact"
              >
                Contact
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 absolute top-[3px] left-16"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </AnchorLink>
            </div>
          </div>
          <div className="bg-[#0A1929] mb-5 md:mb-0 py-12 px-10 w-full rounded-md md:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 text-[#93881C]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
              />
            </svg>

            <h1 className="my-4 text-2xl font-bold">
              Mobile <br /> Responsive
            </h1>
            <div className="relative hover:text-yellow duration-200 font-bold">
              <AnchorLink
                onClick={() => setSelectedPage("contact")}
                href="#contact"
              >
                Contact
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 absolute top-[3px] left-16"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </AnchorLink>
            </div>
          </div>
          <div className="bg-[#0A1929] mb-5 md:mb-0 py-12 px-10 w-full rounded-md md:w-1/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-16 h-16 text-[#583673]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
              />
            </svg>

            <h1 className="my-4 text-2xl font-bold">
              React <br /> Development
            </h1>
            <div className="relative hover:text-yellow duration-200 font-bold">
              <AnchorLink
                onClick={() => setSelectedPage("contact")}
                href="#contact"
              >
                Contact
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 absolute top-[3px] left-16"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </AnchorLink>
            </div>
          </div>
        </div>
      </div>
      <LineGradient></LineGradient>
    </div>
  );
};

export default Services;
