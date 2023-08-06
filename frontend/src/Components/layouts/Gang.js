import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import img from "../../assets/images/gang/pradeep.jpg";
import img1 from "../../assets/images/gang/pradeep.jpg";

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
    <div className="w-full h-screen overflow-hidden flex items-center justify-center bg">
      <motion.div
      
        className=" absolute flex items-center justify-center z-3"
        drag
        
        dragElastic={0.8} // Add this line to enable touch support
        dragConstraints={{
          left: -screenWidth / 2 + 70,
          right: screenWidth / 2 - 70,
          top: -screenHeight / 2 + 140,
          bottom: screenHeight / 2 - 140,
        }}
      >
        <Link to="/gang/images">
          <div>Gang Images</div>
        </Link>
      </motion.div>

      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-23 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-22 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-21 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-20 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-19 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-18 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-17 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-16 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-15 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-14 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>


      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-13 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-12 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-11 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-10 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-9 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-8 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-7 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-6 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-5 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div

        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-4 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-3 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>

      <motion.div
        className=" absolute  flex items-center justify-center  cursor-pointer"
        drag
        dragElastic={0.8}
        dragConstraints={{
          left: -screenWidth / 2 + 50,
          right: screenWidth / 2 - 50,
          top: -screenHeight / 2 + 50,
          bottom: screenHeight / 2 - 50,
        }}
      >
        <div className="card card-2 w-[100px] h-[120px] md:w-[150px] md:h-[180px] bg-black "></div>
      </motion.div>
    </div>
  );
}
