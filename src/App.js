import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Layout/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Cursor from "./components/pages/Cursor/Cursor";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <Cursor></Cursor>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
