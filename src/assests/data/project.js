import { v4 as uuidv4 } from "uuid";
import UTrackerImg from "../img1.png";
import GreenCtgImg from "../project-1.jpeg";
import CoinTrackerImg from "../img4.jpg";

const projects = [
  {
    id: 1,
    name: "Product Resale",
    desc: " Click here to learn more! United Nation news articles give a global perspective to human stories.",
    img: UTrackerImg,
    liveLink: "https://laptop-accessories-a1991.firebaseapp.com/",
    code: "https://github.com/mdaslamalidu/Daily-news-site",
  },
  {
    id: 2,
    name: "Photography",
    desc: "Please Donate your wealth to serve their family issue.",
    img: GreenCtgImg,
    liveLink: "https://photography-site-6824f.firebaseapp.com/",
  },
  {
    id: 3,
    name: "Courses",
    desc: "Build Your carrier with the best one",
    img: CoinTrackerImg,
    liveLink: "https://frolicking-gelato-5bd8e1.netlify.app/",
    code: "https://github.com/mdaslamalidu/online-courses-site-09",
  },
];

export default projects;
