import React from "react";
import { motion } from "framer-motion";

interface props {
  name: string;
  bg: string;
  text: string;
  font: string;
  padding: string;
}

const MotionBtn = ({ name, bg, text, font, padding }: props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type="submit"
      className={` ${padding} ${bg} ${text} ${font} ${padding} font-semibold tracking-wide cursor-pointer w-full p-2 rounded-md `}
    >
      <motion.div
        initial={{ translateY: 5, rotateX: -90 }}
        animate={{ translateY: 0, rotateX: 0 }}
        transition={{ delay: 0.2 }}
      >
        {name}
      </motion.div>
    </motion.button>
  );
};

export default MotionBtn;
