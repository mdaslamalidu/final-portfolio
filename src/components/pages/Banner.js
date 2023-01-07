import SocialIcons from "../../hooks/SocialIcons";
import Typewriter from "typewriter-effect";
import LineGradient from "../../hooks/LineGradient";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Banner = ({ setSelectedPage }) => {
  // const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home">
      <div className="md:flex justify-between items-center gap-16 md:h-full w-5/6 mx-auto">
        {/* IMAGE SECTION */}
        <div
          data-aos="fade-left"
          className="relative basis-3/5 md:mt-16 flex justify-center md:order-2"
        >
          <div className="z-10">
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full h-[508px] max-w-[400px] md:max-w-[600px] -mt-12"
              src="assets/profile.png"
            />
          </div>
          <div className="z-0 absolute top-16 left-20">
            <div className="filter blur-lg opacity-70 absolute z-0  top-0 left-0 mix-blend-multiply w-60 h-60 bg-gray-300 rounded-full"></div>
            <div className="filter blur-lg opacity-70 absolute z-0  top-0 left-60 mix-blend-multiply w-60 h-60 bg-pink-300 rounded-full"></div>
            <div className="filter blur-lg opacity-70 absolute z-0 top-8 left-32 mix-blend-multiply w-60 h-60 bg-yellow rounded-full"></div>
          </div>
        </div>

        {/* MAIN TEXT */}
        <div
          data-aos="fade-right"
          className="z-30 basis-2/5 mt-[-260px] md:mt-32"
        >
          <p
            className="text-5xl  text-white xs:relative xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[100px] before:z-[-1]"
          >
            MD ASLAM ALI
          </p>
          <p className="mt-5 mb-7 text-2xl  md:text-start z-[1]">
            <Typewriter
              className="inline"
              options={{
                strings: [
                  "I'M A WEB DEVELOPER",
                  "I'M A MERN STACK DEVELOPER",
                  "I'M A FRONT END DEVELOPER",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
              }}
            />
          </p>

          {/* CALL TO ACTIONS */}
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
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

      <LineGradient></LineGradient>
    </section>
  );
};

export default Banner;
