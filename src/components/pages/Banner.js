import SocialIcons from "../../hooks/SocialIcons";
import Typewriter from "typewriter-effect";
import LineGradient from "../../hooks/LineGradient";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Banner = ({ setSelectedPage }) => {
  // const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home">
      <div className="w-5/6 mx-auto">
        <div className="mb-[54px] md:mb-20 md:flex justify-between items-center gap-16 md:h-full ">
          {/* IMAGE SECTION */}
          <div
            data-aos="fade-left"
            className="basis-3/5 md:mt-16 flex justify-center items-end md:order-2 relative"
          >
            <div className="z-10">
              <img
                alt="profile"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full h-[333px] md:h-[368px] max-w-[400px] md:max-w-[600px] mt-0 md:-mt-12"
                src="assets/profile.png"
              />
            </div>
            <div className="z-0 absolute top-4 md:top-0 left-1/2 translate-x-[-50%] ">
              <div className="z-0 absolute top-0 left-1/2 translate-x-[-50%] mix-blend-multiply w-80 h-80 bg-gradient-rainblue rounded-lg animate-pulse"></div>
              {/* <div className="filter blur-lg opacity-70 absolute top-20 left-44 mix-blend-multiply w-12 h-12 bg-pink-300 rounded-full animate-blob animation-delay-2000"></div>
        <div className="filter blur-lg opacity-70 absolute top-0 left-40 mix-blend-multiply w-12 h-12 bg-yellow rounded-full animate-blob animation-delay-4000"></div>
        <div className="filter blur-lg opacity-70 absolute top-0 left-4 mix-blend-multiply w-12 h-12 bg-gray-300 rounded-full animate-blob"></div> */}
              {/* <div className="filter blur-lg opacity-70 absolute top-0 left-12 mix-blend-multiply w-12 h-12 bg-pink-300 rounded-full animate-blob animation-delay-2000"></div> */}
              {/* <div className="filter blur-lg opacity-70 absolutetop-8 left-20 mix-blend-multiply w-12 h-12 bg-yellow rounded-full animate-blob animation-delay-4000"></div> */}
            </div>
          </div>

          {/* MAIN TEXT */}
          <div
            data-aos="fade-right"
            className="z-30 basis-2/5 mt-[-260px] md:mt-32 text-center md:text-left"
          >
            <p
              className="text-2xl md:text-5xl  text-white xs:relative font-bold z-20 mt-12 md:mt-0 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[100px] before:z-[-1]"
            >
              MD ASLAM ALI
            </p>
            <p className="mt-2 md:mt-5 mb-3 md:mb-7 text-xl md:text-2xl  md:text-start z-[1]">
              <Typewriter
                className="inline"
                options={{
                  strings: [
                    "WEB DEVELOPER",
                    "MERN STACK DEVELOPER",
                    "FRONT END DEVELOPER",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 40,
                }}
              />
            </p>

            {/* CALL TO ACTIONS */}
            <AnchorLink
              className="bg-gradient-rainblue text-deep-blue rounded px-3 py-2 md:py-3 md:px-7  font-semibold 
              hover:bg-blue hover:text-white transition duration-500"
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Contact Me
            </AnchorLink>

            <SocialIcons />
          </div>
          <h1 className="hidden md:block text-center absolute bottom-4 left-1/2">
            {" "}
            <a href="#services">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="animate-bounce w-6 h-6 rounded-full bg-gradient-rainblue text-black mb-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </a>
          </h1>
        </div>
      </div>

      <LineGradient></LineGradient>
    </section>
  );
};

export default Banner;
