import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./style.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import menuItem from "../../utils/navBarMenu";
import { RootState } from "../../store/Store";
import { motion, AnimatePresence } from "framer-motion";
import {Link} from 'react-router-dom'
import { userName } from "../../utils/data";

const menuVariants = {
  hidden: {
    x: "-100%",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const menuItemVariants = {
  hidden: {
    x: "-20px",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const NavBar = () => {
  const page = useSelector<RootState, number>((state) => state.home.pageNumber);

  //sets the state to true or false based on whether the user has scrolled down 10px or not
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <div
      className={` w-full h-20 ${
        scrolled && "shadow-md"
      }   items-center fixed top-0 left-0 mx-auto z-50 bg-white  flex justify-center `}
    >
      <div
        id="navbar"
        className="w-full h-full  flex justify-between  items-center px-4 "
      >
        <div className="hidden md:block">
          <FontAwesomeIcon icon={faMoon} />
        </div>
        <div className="md:hidden ">
          <Link to="/">
            <h1
              className={`font-semibold ${
                isOpen || page == 0 ? "opacity-0" : "opacity-100"
              }`}
            >
              {userName}
            </h1>
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className=" flex justify-between  ">
            {menuItem.map(({ href, name, pageNumber }) => (
              <li key={pageNumber} className=" font-medium  text-base px-3   ">
                <Link to={href}>
                  <span
                    className={`menu  ${
                      page == pageNumber && "after:w-full"
                    } cursor-pointer `}
                  >
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className=" md:hidden ">
          <button className="pt-2" onClick={toggleMenu}>
            {isOpen ? (
              <span className="material-symbols-outlined">close</span>
            ) : (
              <span className="material-symbols-outlined">menu</span>
            )}
          </button>
          {isOpen && (
            <div
              className={`absolute  left-0 w-screen h-screen z-40   flex justify-center items-center ${
                isOpen && "bg-white"
              } `}
            >
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="flex  flex-col mt-20 text-center bg-white  p-4 shadow-lg w-full h-full"
                    variants={menuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                  >
                    {menuItem.map(({ href, name, pageNumber, transition }) => (
                      <motion.div
                        className={`my-4 text-2xl font-bold cursor-pointer  ${
                          page == pageNumber ? "text-black" : "text-gray-400"
                        }`}
                        variants={menuItemVariants}
                        transition={{ delay: transition }}
                        onClick={toggleMenu}
                      >
                        <Link to={href}>{name}</Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
