import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import images from "../../utils/portfolioImages";
import PrevButton from "../buttons/PrevButton";
import NextButton from "../buttons/NextButton";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { currentPageNumber } from "../../store/slice/home";
import Arrow from "../arrow/Arrow";
import "./style.css";

const Portfolio = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrevClick = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  };

  const handleNextClick = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(currentPageNumber(2));
  }, []);

  //mob
  return (
    <div
      id="portfolio"
      className="h-screen md:flex flex-col justify-center relative  "
    >
      <h1 className="text-2xl font-bold mb-3 pt-24 hidden md:block ">
        Portfolio
      </h1>
      <div className="hidden md:grid h-screen">
        <div>
          <div className="Carousel_image flex  h-96 px-10 relative  overflow-hidden justify-center">
            <img
              src={images[currentImage].url}
              alt=""
              className="object-cover cursor-pointer "
              onClick={() => {
                const redirectUrl = images[currentImage].redirect;
                window.location.href = redirectUrl;
              }}
            />

            <PrevButton
              handlePrevClick={handlePrevClick}
              images={images}
              currentImage={currentImage}
            />
            <NextButton
              handleNextClick={handleNextClick}
              images={images}
              currentImage={currentImage}
            />
          </div>

          {images.length > 1 && (
            <div className="absolute  left-0 right-0 flex justify-center mt-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`mx-2 rounded-full w-2 h-2 ${
                    index === currentImage ? "bg-black" : "bg-gray-400"
                  }`}
                ></button>
              ))}
            </div>
          )}
          <div className="relative  ">
            <Arrow navigate="/contact" arrow="arrow_downward" />
          </div>
        </div>
      </div>
      {/* mobile view*/}
      <div className="md:hidden scrollable-div hide-scrollbar w-full overflow-x-scroll flex justify-center items-center  h-screen">
        <div className="flex gap-3 mt-10 ">
          {images.map(({ url, redirect }) => (
            <div className="w-24 min-w-full h-[30em] rounded-xl bg-gray-50 ">
              <img
                className="w-full h-full object-contain p-5"
                src={url}
                alt=""
                onClick={() => {
                  window.location.href = redirect;
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="relative md:hidden  ">
        <Arrow navigate="/contact" arrow="arrow_downward"/>
      </div>
    </div>
  );
};

export default Portfolio;
