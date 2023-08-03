import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from 'react-router-dom';

export default function Gang() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    // Add an event listener to update the state when the window is resized
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
 
  return (
    <div className="w-full h-screen overflow-hidden flex items-center justify-center">
      <motion.div
        className=" absolute flex items-center justify-center z-3"
        drag
        dragConstraints={{
          left: -screenWidth / 2 + 70,
          right: screenWidth / 2 - 70,
          top: -screenHeight / 2 + 140,
          bottom: screenHeight / 2 - 140,
        }}
      >
       <Link to='/gang/images'>
       <button className="">Gang Images</button></Link>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center z-31"
        drag
        dragConstraints={{
          left: -screenWidth / 2 + 100,
          right: screenWidth / 2 - 100,
          top: -screenHeight / 2 + 100,
          bottom: screenHeight / 2 - 100,
        }}
      >
        <div className=" card w-[100px] h-[200px] bg-black"></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center z-32"
        drag
        dragConstraints={{
          left: -screenWidth / 2 + 40,
          right: screenWidth / 2 - 40,
          top: -screenHeight / 2 + 40,
          bottom: screenHeight / 2 - 40,
        }}
      >
        <div className=" card w-[100px] h-[200px] bg-black"></div>
      </motion.div>
    </div>
  );
}
