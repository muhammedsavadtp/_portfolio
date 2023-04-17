import React from "react";
import { motion } from "framer-motion";


interface Props {
  name: string;
  level: string;
}
const ProgressBar = ({ name, level }: Props) => {
  const containerStyles = {
    height: "10px",
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: "5px",
  };

  interface FillStyles {
    height: string;
    backgroundColor: string;
    borderRadius: string;
    scaleX: number;
    transformOrigin: string;
    transition: any; // Use Transition type from framer-motion
  }

  const fillStyles: FillStyles = {
    height: "100%",
    backgroundColor: "black",
    borderRadius: "5px",
    scaleX: 0, // start with a scale of 0
    transformOrigin: "left center", // set the transform origin to the left center
    transition: {
      duration: 3, // set the animation duration to 0.9s
    },
  };

  return (
    <div>
      <h3 className="text-gray-500  md:text-lg font-semibold ">{name}</h3>
      <motion.div className="rounded-full bg-gray-300 mb-1 " style={containerStyles}>
        <motion.div
          className="rounded-full bg-black "
          style={fillStyles}
          animate={{ scaleX: level }} // animate the scaleX property to the specified level
        />
      </motion.div>
    </div>
  );
};

export default ProgressBar;
