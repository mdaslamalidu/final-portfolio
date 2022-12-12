import { v4 as uuidv4 } from "uuid";
import UTrackerImg from "../img44.jpg";
import GreenCtgImg from "../project-1.png";
import CoinTrackerImg from "../img4.jpg";

const projects = [
  {
    id: 1,
    name: "Product Resale",
    desc: "It's a laptop resale site, that Builds a user (authentication, and authorization) system for Admin, Bayers, and Sellers.",
    img: UTrackerImg,
    liveLink: "https://laptop-accessories-a1991.firebaseapp.com/",
    code: "https://github.com/mdaslamalidu/Daily-news-site",
  },
  {
    id: 2,
    name: "Photography",
    desc: " It’s an individual services site where users can see a person’s services using a login system. Implement user authentication, and react photo view to see the whole display using user click.",
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
