import SocialIcons from "../../hooks/SocialIcons";
import Typewriter from "typewriter-effect";
import LineGradient from "../../hooks/LineGradient";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Banner = ({ setSelectedPage }) => {
  // const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home">
      <div className="md:flex md:justify-between md:items-center gap-16 md:h-full w-5/6 mx-auto">
        {/* IMAGE SECTION */}
        <div className="basis-3/5 z-10 md:mt-16 flex justify-center md:order-2">
          <div>
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full h-[508px] max-w-[400px] md:max-w-[600px] -mt-12"
              src="assets/profile.png"
            />
          </div>
        </div>

        {/* MAIN TEXT */}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
          <p
            className="text-5xl  text-white xs:relative xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[100px] before:z-[-1]"
          >
            MD ASLAM ALI
          </p>
          <p className="mt-5 mb-7 text-2xl text-center md:text-start z-[1]">
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
      </div>
      <LineGradient></LineGradient>
    </section>
  );
};

export default Banner;
