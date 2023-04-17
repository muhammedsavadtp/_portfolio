import React from 'react'
import { motion } from "framer-motion";

const NextButton = ({ handleNextClick, images, currentImage }) => {
     const variants = {
       hover: { scale: 1.1 },
       tap: { scale: 0.9 },
     };
   return (
     <>
       {images.length > 1 && currentImage < images.length - 1 && (
         <motion.button
           onClick={handleNextClick}
           className="p-5 top-1/2 flex justify-center items-center bg-white rounded-full w-5 h-5 absolute right-5 drop-shadow-lg"
           variants={variants}
           whileHover="hover"
           whileTap="tap"
         >
           <motion.span className="material-symbols-outlined">
             arrow_forward_ios
           </motion.span>
         </motion.button>
       )}
     </>
   );
 };

export default NextButton