import React, { useEffect, useState } from "react";
import Services from "../Services";
import About from "../About";
import Banner from "../Banner";
import Blog from "../Blogs";
import Contacts from "../Contacts";
import Experience from "../Experience";
import Footer from "../Footer";
import { Navbar } from "../Navbar";
import Projects from "../Projects";

const Home = () => {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      ></Navbar>
      <Banner setSelectedPage={setSelectedPage}></Banner>
      <Services></Services>
      <About></About>
      <Experience></Experience>
      <Projects></Projects>
      <Blog></Blog>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
};

export default Home;
