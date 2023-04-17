import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import Instagram from "../../assets/svg/Instagram";
import GitHub from "../../assets/svg/GitHub";
import skills, {
  backEnd,
  frontEnd,
  frontEndFrameWorks,
  others,
  userInterface,
  versionControll,
} from "../../utils/skill";
import ProgressBar from "../progress/progressBar";
import LinkedIn from "../../assets/svg/LinkedIn";
import { Link } from "react-router-dom";
import { currentPageNumber } from "../../store/slice/home";
import { aboutUser, userDomain, userName } from "../../utils/data";

const About = () => {
  const sectionNames = [
    "Front End",
    "Front End Framework",
    "User Interface",
    "Back End",
    "Version Controll",
    "Others",
  ];
  const livePage = [
    frontEnd,
    frontEndFrameWorks,
    userInterface,
    backEnd,
    versionControll,
    others,
  ];
  const buttonVariants = {
    hover: {
      scale: 1.1,
    },
  };

  const [page, setPage] = useState(1); //about page
  const [aboutBackBtn, setAboutBackBtn] = useState(false);
  const [aboutPage, setAboutPage] = useState(0);
  const [skillPage, setSkillPage] = useState(0);
  const [skillBackBtn, setSkillBackBtn] = useState(false);
  const [skillForwardBtn, setSkillForwardBtn] = useState(true);
  const [sectionName, setSectionName] = useState(sectionNames[0]);

  const handleForWardBtn = () => {
    setSkillPage(skillPage + 1);
  };

  const handlebackWardBtn = () => {
    setSkillPage(skillPage - 1);
  };

  const handleSectionName = (skillPage: number) => {
    const name = sectionNames[skillPage];
    setSectionName(name);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentPageNumber(1));
  }, []);

  useEffect(() => {
    handleSectionName(skillPage);
    setSkillBackBtn(skillPage > 0);
    setSkillForwardBtn(skillPage < sectionNames.length - 1);
  }, [skillPage]);

  return (
    <div id="about" className="h-screen flex flex-col  md:pt-24 relative ">
      <h1 className="text-2xl font-bold mb-3 hidden md:block ">About Me</h1>

      {page === 1 ? (
        <div className="box hidden md:grid grid-cols-2 grid-rows-3 h-3/4 overflow-hidden gap-16">
          <div className="box_content row-span-3  ">
            <div className="userImageBox  h-full  rounded overflow-hidden  ">
              <img
                className="object-cover "
                style={{
                  height: "100%",
                  width: "100%",
                }}
                src="/src/assets/image/img3.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="box_content row-span-2 relative overflow-auto">
            <h1 className="text-xl font-semibold capitalize mb-3">
              {userName}
            </h1>
            <p className="">{aboutUser}</p>
          </div>
          <div className="flex  justify-center items-center gap-5 pt-16 relative ">
            <div className="download_cv">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="py-2 px-4 bg-gray-500 hover:bg-black rounded text-white "
              >
                <motion.div
                  initial={{ translateY: 5, rotateX: -90 }}
                  animate={{ translateY: 0, rotateX: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center"
                >
                  <span className="material-symbols-outlined mr-2">
                    download
                  </span>
                  Download CV
                </motion.div>
              </motion.button>
            </div>

            <div className="social_media flex">
              <ul className="flex items-center">
                <li className="px-2 cursor-pointer">
                  <a href="">
                    <Instagram height={25} width={25} />
                  </a>
                </li>
                <li className="px-2 cursor-pointer">
                  <a href="">
                    <GitHub height={25} width={25} />
                  </a>
                </li>
                <li className="px-2 cursor-pointer">
                  <a href="">
                    <LinkedIn height={35} width={35} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : page === 2 ? (
        <div className="h-3/4 hidden md:block">
          <h1 className="text-center text-xl font-semibold mb-16">Skills</h1>
          <div className=" flex justify-center ">
            <ul className="w-1/2">
              <div className="flex flex-col gap-4">
                {skills.map((skill) => (
                  <ProgressBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                  />
                ))}
              </div>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="hidden md:flex justify-center pt-10">
        <ul className="flex gap-3">
          <li>
            <button
              onClick={() => setPage(1)}
              className={`h-5 w-5  ${
                page === 1 ? "bg-black" : "bg-gray-300"
              }  rounded-full `}
            ></button>
          </li>
          <li>
            <button
              onClick={() => setPage(2)}
              className={`h-5 w-5 ${
                page === 2 ? "bg-black" : "bg-gray-300"
              } rounded-full`}
            ></button>
          </li>
        </ul>
      </div>

      <div className="flex justify-center flex-col   h-screen  md:hidden">
        {aboutPage == 0 ? (
          <div>
            <div className="flex justify-center">
              <div className=" w-52 h-52 rounded-full overflow-hidden mb-10">
                <img
                  className="object-cover h-full w-full "
                  src="/src/assets/image/img3.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="mb-5">
              <h1 className="capitalize text-center font-bold text-2xl">
                {userName}
              </h1>
              <p className="uppercase text-center text-gray-400 font-semibold ">
                {userDomain}
              </p>
            </div>
            <div className="flex justify-center mb-5">
              <motion.button
                className="h-12 w-3/4 shadow-md font-semibold rounded-md bg-white"
                whileHover="hover"
                variants={buttonVariants}
                onClick={() => {
                  setAboutPage(1);
                  setAboutBackBtn(true);
                }}
              >
                About me
              </motion.button>
            </div>
            <div className="flex justify-center">
              <motion.button
                className="h-12 w-3/4 shadow-md font-semibold rounded-md bg-white"
                whileHover="hover"
                variants={buttonVariants}
                onClick={() => {
                  setAboutPage(2);
                  setAboutBackBtn(true);
                }}
              >
                My skills
              </motion.button>
            </div>
          </div>
        ) : aboutPage == 1 ? (
          <div className="h-full">
            <h1 className="pt-24 text-xl font-semibold mb-5">About me</h1>
            <p className="  overflow-auto">{aboutUser}</p>

            {/* download cv */}
            <div className=" flex justify-center flex-col mt-10  items-center">
              <div className="download_cv mb-5">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="py-2 px-4 h-14 w-48 bg-gray-500 hover:bg-black rounded text-white "
                >
                  <motion.div
                    initial={{ translateY: 5, rotateX: -90 }}
                    animate={{ translateY: 0, rotateX: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center"
                  >
                    <span className="material-symbols-outlined mr-2">
                      download
                    </span>
                    Download CV
                  </motion.div>
                </motion.button>
              </div>

              <div className="social_media flex">
                <ul className="flex items-center">
                  <li className="px-2 cursor-pointer">
                    <a href="">
                      <Instagram height={25} width={25} />
                    </a>
                  </li>
                  <li className="px-2 cursor-pointer">
                    <a href="">
                      <GitHub height={25} width={25} />
                    </a>
                  </li>
                  <li className="px-2 cursor-pointer">
                    <a href="">
                      <LinkedIn height={35} width={35} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* back button  */}
            <div className="  pb-5 relative">
              {aboutBackBtn && (
                <button
                  onClick={() => {
                    setAboutBackBtn(false);
                    setAboutPage(0);
                  }}
                  className="   left-0   h-10 w-10 flex justify-center items-center text-white bg-black rounded-full "
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
              )}
            </div>
          </div>
        ) : aboutPage == 2 ? (
          <div className="h-full relative ">
            <h1 className="pt-24 text-xl font-semibold mb-5">My skills</h1>

            <div className="box_container h-[63%]  rounded-md relative  mx-5 mt-16 flex items-center justify-center p-5 ">
              <div className="absolute overflow-hidden rounded-md z-30  shadow-md bg-white h-[58vh] top-1 bottom-8 w-[95%] p-2 flex flex-col items-center">
                <motion.div
                  className="bg-black mt-2 px-5 rounded-full"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.h1
                    className="text-white text-center p-1 font-semibold"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {sectionName}
                  </motion.h1>
                </motion.div>
                <div className=" flex justify-center w-full mt-10 ">
                  <ul className="w-[90%]">
                    <li className="flex flex-col gap-4">
                      {livePage[skillPage].map((skill) => (
                        <ProgressBar
                          key={skill.name}
                          name={skill.name}
                          level={skill.level}
                        />
                      ))}
                    </li>
                  </ul>
                </div>

                {skillForwardBtn && (
                  <button
                    disabled={!skillForwardBtn}
                    onClick={handleForWardBtn}
                    className=" absolute right-2 top-[21em]   h-10 w-10 flex justify-center items-center text-white bg-black rounded-full "
                  >
                    <span className="material-symbols-outlined">
                      arrow_forward
                    </span>
                  </button>
                )}

                {skillBackBtn && (
                  <button
                    disabled={!skillBackBtn}
                    onClick={handlebackWardBtn}
                    className=" absolute left-2 top-[21em]   h-10 w-10 flex justify-center items-center text-white bg-black rounded-full "
                  >
                    <span className="material-symbols-outlined">
                      arrow_back
                    </span>
                  </button>
                )}
              </div>
              <div className="absolute rounded-md z-20 bg-gray-100 h-1/2  bottom-[52%] w-[90%]"></div>
              <div className="absolute rounded-md z-10 bg-gray-200  h-1/2    bottom-[54%] w-[85%]"></div>
            </div>

            {/* back button  */}
            <div className="  pb-5 ">
              {aboutBackBtn && (
                <button
                  onClick={() => {
                    setAboutBackBtn(false);
                    setAboutPage(0);
                  }}
                  className="   h-10 w-10 flex justify-center items-center text-white bg-black rounded-full "
                >
                  <span className="material-symbols-outlined">arrow_back</span>
                </button>
              )}
            </div>
          </div>
        ) : null}
      </div>
      {aboutPage == 0 && (
        <div className="down-arrow    flex justify-end">
          <div className="   absolute top-[90%]  w-16 h-16  rounded-full flex justify-center p-5 items-center cursor-pointer">
            <motion.button
              whileHover={{ scale: 2.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                initial={{ translateY: 5, rotateX: -90 }}
                animate={{ translateY: 0, rotateX: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <Link to="/portfolio">
                  <span className="material-symbols-outlined  animate-bounce  ">
                    arrow_downward
                  </span>
                </Link>
              </motion.div>
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;
