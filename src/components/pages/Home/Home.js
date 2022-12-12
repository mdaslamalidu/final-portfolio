import React, { useEffect, useState } from "react";
import About from "../About";
import Banner from "../Banner";
import Blog from "../Blogs";
import Contacts from "../Contacts";
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
      <Projects></Projects>
      <About></About>
      <Blog></Blog>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
};

export default Home;
