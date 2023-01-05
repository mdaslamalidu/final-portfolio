import myImg from "../../assests/mypic.png";
import LineGradient from "../../hooks/LineGradient";

const About = () => {
  return (
    <section>
      <div id="about" className="my-24 w-5/6 mx-auto">
        <div className="relative">
          <p className="text-yellow font-bold">About me</p>
          <p className="absolute h-[3px] w-12 top-[13px] left-20 bg-gradient-rainblue"></p>
          <h1 className="font-bold text-[50px] my-6">
            <span className="text-red font-bold">ABOUT </span>ME
          </h1>
        </div>
        <>
          <div className="flex flex-col md:flex-row justify-around gap-8">
            <div className="w-full md:w-1/2 bg-[#0A1929] rounded-lg shadow-xl">
              <img className="w-full  rounded" src={myImg} alt="" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="my-5">
                <h1 className="text-4xl font-bold ">I'm Md Aslam Ali</h1>
                <h1 className="text-2xl font-bold my-2">
                  I am a <span className="text-red">Full Stack Developer</span>
                </h1>
                <h2 className="text-[16px] font-bold my-6 text-justify">
                  I have exclusive knowledge of web technologies besides these I
                  have good communication, collaboration, Negotiation, Patience,
                  Time management, Visual thinking, and problem-solving skills
                  in critical situations with analytical knowledge and the
                  latest technology. I am quite adaptable to new technologies
                  and more enthusiastic about learning new things. Always I like
                  to code, design, and implement websites for a variety of
                  clients.
                </h2>
                <LineGradient className="text-center my-8" width="w-full" />
                <div className="mt-6">
                  <div className="flex justify-between mb-8">
                    <div>
                      <h2 className="my-2">
                        <b className="text-xl font-bold py-2 rounded my-2">
                          {" "}
                          Name :
                        </b>
                        <b className="text-sm md:text-lg font-semibold text-gray-300 mx-2">
                          Md Aslam Ali
                        </b>
                      </h2>
                      <h2 className="my-2">
                        <b className="text-xl font-bold py-2 rounded my-2">
                          {" "}
                          Age :
                        </b>
                        <b className="text-sm md:text-lg font-semibold text-gray-300 mx-2">
                          23
                        </b>
                      </h2>
                      <h2 className="my-2">
                        <b className="text-xl font-bold py-2 rounded my-2">
                          {" "}
                          Nationality :
                        </b>
                        <b className="text-sm md:text-lg font-semibold text-gray-300 mx-2">
                          Bangladeshi
                        </b>
                      </h2>
                      <h2 className="my-2">
                        <b className="text-xl font-bold py-2 rounded my-2">
                          {" "}
                          Languages :
                        </b>
                        <b className="text-sm md:text-lg font-semibold text-gray-300 mx-2">
                          Bangla English Arabic
                        </b>
                      </h2>
                    </div>

                    <div>
                      <h2 className="my-2">
                        <b className="text-xl font-bold py-2 rounded my-2">
                          {" "}
                          Address :
                        </b>
                        <b className="text-sm md:text-lg font-semibold text-gray-300 mx-2">
                          Dhaka, Bangladesh
                        </b>
                      </h2>
                      <h2 className="my-2">
                        <b className="text-xl font-bold py-2 rounded my-2">
                          {" "}
                          Email :
                        </b>
                        <b className="text-sm md:text-lg font-semibold text-gray-300 mx-2">
                          mdaslamali675@gmail.com
                        </b>
                      </h2>
                      <h2 className="my-2">
                        <b className="text-xl font-bold py-2 rounded my-2">
                          {" "}
                          Phone :
                        </b>
                        <b className="text-sm md:text-lg font-semibold text-gray-300 mx-2">
                          +8801405785766
                        </b>
                      </h2>
                    </div>
                  </div>
                  <a
                    className="border-2 border-gradient-rainblue px-4 py-2 hover:bg-gradient-rainblue rounded"
                    href="/Aslam's_Resume.pdf"
                    download
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
      <LineGradient></LineGradient>
    </section>
  );
};

export default About;
