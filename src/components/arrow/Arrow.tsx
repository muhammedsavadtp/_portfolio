import React from 'react'
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

interface props {
  navigate: string;
  arrow: string;
  top: string;
}

const Arrow = ({navigate , arrow , top}:props) => {
  return (
    <div className="down-arrow   flex justify-end ">
      <div className={`${top}  absolute w-16 h-16   rounded-full flex justify-center p-5 items-center cursor-pointer`}>
        <motion.button
          whileHover={{ scale: 2.05 }}
          whileTap={{ scale: 0.95 }}
          // className="py-2 px-4 bg-gray-500 hover:bg-black rounded text-white "
        >
          <motion.div
            initial={{ translateY: 5, rotateX: -90 }}
            animate={{ translateY: 0, rotateX: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <Link to={navigate}>
              <span className="material-symbols-outlined  animate-bounce  ">
                {arrow? arrow : 'arrow_downward'}
              </span>
            </Link>
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}

export default Arrow