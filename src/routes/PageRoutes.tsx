import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import PageNotFount from "../pages/PageNotFount404";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

const PageRoutes = () => {
  return (
      <div id="container" className=" mx-auto  relative  px-4">
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFount />} />
    </Routes>
      </div>
  );
};

export default PageRoutes;
