import React from "react";
import { Route, Routes } from "react-router-dom";

const About = React.lazy(() => import("./page/About"));
const Contact = React.lazy(() => import("./page/Contact"));
const Home = React.lazy(() => import("./page/Home"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/About" element={<About />}></Route>
      <Route path="/Contact" element={<Contact />}></Route>
    </Routes>
  );
};

export default AppRoutes;
