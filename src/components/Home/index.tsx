import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { currentPageNumber } from "../../store/slice/home";
import getCurrentPageNumber from "../../utils/getCurrentPageNumber";
import "./style.css";
import { userName } from "../../utils/data";
import About from "../about/About";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import Arrow from "../arrow/Arrow";

const HomeScreen = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentPageNumber(0));
  }, []);
  return (
    <>
      <div
        id="home"
        className="h-screen flex flex-col md:flex-row bg-red-300 justify-center  relative flex-wrap"
      >
      
      </div>
      
    </>
  );
};

export default HomeScreen;
