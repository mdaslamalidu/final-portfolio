import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

const NavLink = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page?.toLowerCase();
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

export const Navbar = ({ isTopOfPage, setSelectedPage, selectedPage }) => {
  // const [selectedPage, setSelectedPage] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [isTopOfPage, setIsTopOfPage] = useState(true);
  const navbarBackground = isTopOfPage ? "" : "bg-[#0A1929]";

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY === 0) {
  //       setIsTopOfPage(true);
  //       setSelectedPage("home");
  //     }
  //     if (window.scrollY !== 0) setIsTopOfPage(false);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className={`${navbarBackground} sticky top-0 z-40`}>
      <div class="py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl w-5/6 mx-auto">
        <div class="relative flex items-center justify-between">
          <Link
            to="/"
            aria-label="Company"
            title="Company"
            class="inline-flex items-center"
          >
            <img className="w-8" src="assets/logo.png" alt="" />
          </Link>
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li>
              <NavLink
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li>
              <NavLink
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li>
              <NavLink
                page="Blog"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li>
              <NavLink
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </li>
            <li>
              <a
                className="border-2 border-gradient-rainblue px-4 py-2 hover:bg-gradient-rainblue"
                href="/Aslam's_Resume.pdf"
                download
              >
                Download Resume
              </a>
            </li>
            {/* <li>
              <a
                href="/"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#project"
                aria-label="Our product"
                title="Our product"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Project
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="Product pricing"
                title="Product pricing"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="/"
                aria-label="About us"
                title="About us"
                class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/"
                class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                aria-label="Sign up"
                title="Sign up"
              >
                Sign up
              </a>
            </li> */}
          </ul>
          <div class="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg class="w-5 text-gradient-rainblue" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div class="absolute top-0 left-0 w-full">
                <div class="p-5 bg-[#0A1929] border rounded shadow-sm">
                  <div class="flex items-center justify-between mb-4">
                    <div>
                      <Link
                        to="/"
                        aria-label="Company"
                        title="Company"
                        class="inline-flex items-center"
                      >
                        <img className="w-8" src="assets/logo.png" alt="" />
                      </Link>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg
                          class="w-5 text-gradient-rainblue"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul class="space-y-4">
                      <li>
                        <NavLink
                          page="Home"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                      </li>
                      <li>
                        <NavLink
                          page="Projects"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                      </li>
                      <li>
                        <NavLink
                          page="About"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                      </li>
                      <li>
                        <NavLink
                          page="Blog"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                      </li>
                      <li>
                        <NavLink
                          page="Contact"
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                        />
                      </li>
                      <li>
                        <a
                          className="border-2 border-gradient-rainblue px-4 py-2 hover:bg-gradient-rainblue"
                          href="/Aslam's_Resume.pdf"
                          download
                        >
                          Download Resume
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
