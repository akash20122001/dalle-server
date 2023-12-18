import React, { useEffect, useRef } from "react";
import { collage } from "../assets";
import {
  comp1,
  comp2,
  comp3,
  comp4,
  comp5,
  comp6,
  comp7,
  comp8,
  comp9,
  comp10,
  comp11,
  comm1,
  comm2,
  comm3,
  comm4,
  comp12,
} from "../assets";

import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const FrontPage = () => {
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
  // const ref = useRef(null);
  const [ref, inView] = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // Percentage of the element visible in viewport to trigger the animation
  });
  
  // const inView = useInView(ref,{once:true});
  const mainControls = useAnimation(); 
  useEffect(() => {
    if(inView){
      mainControls.start("visible");
    }
    console.log(inView)

  }, [inView ])
  
  return (
    // <motion.div >

    
    <motion.div 
    ref={ref}
  initial="hidden"
  animate={inView ? 'visible' : 'hidden'}
  variants={animationVariants}
  // transition={{ duration: 0.5 }}
      // variants={
      //   {
      //     hidden: { opacity: 0, y: 75 },
      //     visible: { opacity: 1, y: 0 }

      //   }
      // }
      // initial="hidden"
      // animate="visible"
      transition={{
        duration: 0.8,
        delay: 0.25,
        // ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <motion.div 
        // initial={{ opacity: 0, y: 75 }}
        // animate={{ opacity: 1, y: 0 }}
        // transition={{
        //   duration: 0.8,
        //   delay: 0.25,
        //   // ease: [0, 0.71, 0.2, 1.01],
        // }}
        className="flex justify-evenly h-[60vh] items-center">
        <div className="flex flex-col">
          <h1 className="font-bold text-7xl mb-3">Welcome</h1>
          <h1 className="font-bold text-7xl">to Crea8Gen</h1>
          <p className="mt-8 text-3xl">Digital Retailer of Content</p>
          <p className="mt-2 text-3xl">Watch and create Content</p>
          <motion.button
            animate={{ height: 60, width: 200 }}
            className="mt-10 ml-6 text-xl btn  bg-red-400 rounded-lg p-2 text-white"
          >
            Get Started
          </motion.button>
        </div>
        <div className="rounded-full bg-transparent w-[30rem] overflow-hidden h-[30rem] backdrop-blur-sm">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="object-cover w-full h-full -rotate-[15deg]  backdrop-blur-sm"
            src={collage}
            alt=""
          />
        </div>
      </motion.div>
      <div 
      // initial={{ opacity: 0, y: 75 }}
      //   animate={{ opacity: 1, y: 0 }}
      //   transition={{
      //     duration: 0.8,
      //     delay: 0.25,
      //     // ease: [0, 0.71, 0.2, 1.01],
      //   }}
        className="flex justify-evenly items-center">
        <div className="flex flex-col mt-10">
          <h1 className="font-bold text-3xl">Create Content Now</h1>
          <p>1000+ available</p>
        </div>
        <div className="flex flex-col mt-10">
          <h1 className="font-bold text-3xl">Find other's creations</h1>
          <p>Search by names or prompt</p>
        </div>
      </div>
      <div 
      
      className="flex flex-col items-center">
        <div className="flex justify-evenly mt-20">
          <div className="flex flex-col w-[20%]">
            <div
            // initial={{ opacity: 0, scale: 0 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{
            //   duration: 0.4,
            //   delay: 0.25,
            //   // ease: [0, 0.71, 0.2, 1.01],
            // }}
             className="rounded-full w-[140px] h-[140px] bg-blue-600 mb-8"></div>
            <h1 className="text-3xl font-bold">Create your own</h1>
            <h1 className="text-2xl font-bold">Content</h1>
            <p className="text-lg mt-6 font-semibold text-gray-500">
              {" "}
              Reprehenderit explicabo magni perspiciatis facilis, tempore
              deleniti perferendis officia quis temporibus.
            </p>
          </div>
          <div className="flex flex-col w-[20%]">
            <div
            // initial={{ opacity: 0, scale: 0 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{
            //   duration: 0.4,
            //   delay: 0.25,
            //   // ease: [0, 0.71, 0.2, 1.01],
            // }}
            className="rounded-full w-[140px] h-[140px] bg-blue-600 mb-8"></div>
            <h1 className="text-3xl font-bold">Create your own</h1>
            <h1 className="text-2xl font-bold">Content</h1>
            <p className="text-lg mt-6 font-semibold text-gray-500">
              {" "}
              Reprehenderit explicabo magni perspiciatis facilis, tempore
              deleniti perferendis officia quis temporibus.
            </p>
          </div>
          <div className="flex flex-col w-[20%]">
            <div 
            // initial={{ opacity: 0, scale: 0 }}
            // animate={{ opacity: 1, scale: 1 }}
            // transition={{
            //   duration: 0.4,
            //   delay: 0.25,
            //   // ease: [0, 0.71, 0.2, 1.01],
            // }}
             className="rounded-full w-[140px] h-[140px] bg-blue-600 mb-8"></div>
            <h1 className="text-3xl font-bold">Create your own</h1>
            <h1 className="text-2xl font-bold">Content</h1>
            <p className="text-lg mt-6 font-semibold text-gray-500">
              {" "}
              Reprehenderit explicabo magni perspiciatis facilis, tempore
              deleniti perferendis officia quis temporibus.
            </p>
          </div>
        </div>
        <button className="btn bg-red-500 mt-12 text-white rounded-xl py-4 px-16 text-md">
          Get Started
        </button>
      </div>
      <div className="flex flex-col items-center mt-12">
        <h1 className=" text-3xl font-semibold mx-auto">
          Over 1000+ different art
        </h1>
        <div className=" flex ">
          <h1 className="text-3xl font-semibold mx-2">designs </h1>
          <h1 className="text-3xl font-semibold text-blue-700 mx-auto">
            to choose from
          </h1>
        </div>
        <div className="flex justify-center mt-12 ">
          <img
            className="h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp1}
            alt=""
          />
          <img
            className="h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp2}
            alt=""
          />
          <img
            className="h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp3}
            alt=""
          />
          <img
            className="h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp4}
            alt=""
          />
          <img
            className="h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp5}
            alt=""
          />
          <img
            className="h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp6}
            alt=""
          />
        </div>
        <div className="flex justify-center mt-8 ">
          <img
            className="h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp7}
            alt=""
          />
          <img
            className="h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp8}
            alt=""
          />
          <img
            className="h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp9}
            alt=""
          />
          <img
            className="h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp10}
            alt=""
          />
          <img
            className="h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp11}
            alt=""
          />
          <img
            className="h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp12}
            alt=""
          />
        </div>

        <div className="flex flex-col mt-20 items-center bg-[url('https://i.pinimg.com/originals/89/d3/ae/89d3aed568532c14e372494ef87def91.jpg')] ">
          <h1 className="font-bold text-3xl">
            View and download creations from
          </h1>
          <h1 className="font-bold mb-20 text-blue-700 text-3xl">
            our creator community
          </h1>
          <div className="flex justify-between ">
            <div className='flex flex-col -rotate-[15deg] drop-shadow-lg rounded-3xl items-center mx-16 justify-center h-60 w-48  bg-[url("https://static.vecteezy.com/system/resources/thumbnails/007/167/520/small/geometric-line-circles-pattern-background-design-perfect-for-fashion-print-fabric-clothing-free-vector.jpg")]'>
              <img
                className="h-32 drop-shadow-xl w-32 rounded-full"
                src={comp1}
                alt=""
              />
              <h1 className="font-bold text-lg mt-4">By Akash Soni</h1>
              <button className="px-2 bg-red-500 text-white rounded-full mt-2">
                Creator
              </button>
            </div>
            <div className='flex flex-col rotate-[19deg] drop-shadow-lg rounded-3xl items-center mx-8 justify-center h-60 w-48  bg-[url("https://static.vecteezy.com/system/resources/thumbnails/007/167/520/small/geometric-line-circles-pattern-background-design-perfect-for-fashion-print-fabric-clothing-free-vector.jpg")]'>
              <img
                className="h-32 drop-shadow-xl w-32 rounded-full"
                src={comp2}
                alt=""
              />
              <h1 className="font-bold text-lg mt-4">By Mayank</h1>
              <button className="px-2 bg-red-500 text-white rounded-full mt-2">
                Creator
              </button>
            </div>
            <div className='flex flex-col rotate-[15deg] drop-shadow-lg rounded-3xl items-center  mx-8 justify-center h-60 w-48  bg-[url("https://static.vecteezy.com/system/resources/thumbnails/007/167/520/small/geometric-line-circles-pattern-background-design-perfect-for-fashion-print-fabric-clothing-free-vector.jpg")]'>
              <img
                className="h-32 drop-shadow-xl w-32 rounded-full"
                src={comp3}
                alt=""
              />
              <h1 className="font-bold text-lg mt-4">By Yash Gupta</h1>
              <button className="px-2 bg-red-500 text-white rounded-full mt-2">
                Creator
              </button>
            </div>
            <div className='flex flex-col -rotate-[10deg] drop-shadow-lg rounded-3xl mx-8 items-center justify-center h-60 w-48  bg-[url("https://static.vecteezy.com/system/resources/thumbnails/007/167/520/small/geometric-line-circles-pattern-background-design-perfect-for-fashion-print-fabric-clothing-free-vector.jpg")]'>
              <img
                className="h-32 drop-shadow-xl w-32 rounded-full"
                src={comp4}
                alt=""
              />
              <h1 className="font-bold text-lg mt-4">By Ashish</h1>
              <button className="px-2 bg-red-500 text-white rounded-full mt-2">
                Creator
              </button>
            </div>
            {/* <img className="h-[200px] w-[200px] mx-16" src={comm4} alt="" />
            <img className="h-[200px] w-[200px] mx-16" src={comm3} alt="" />
            <img className="h-[200px] w-[200px] mx-16" src={comm2} alt="" /> */}
          </div>
        </div>

        <h1 className="font-bold text-4xl mt-28">What are you waiting for ?</h1>
        <h1 className="font-bold text-4xl text-blue-700 mt-4 mb-12">
          Create new Content Now !
        </h1>
        <button className="btn bg-red-500 px-8 py-3 text-3xl font-bold text-white rounded-full">
          {" "}
          Get Started{" "}
        </button>
      </div>
    </motion.div>

    // </motion.div>
  );
};

export default FrontPage;
