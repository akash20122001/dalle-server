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
  content,
  search,
  bulb,
  infinity,
  clock

} from "../assets";


import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FrontPage = () => {

  const navigate = useNavigate();
  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          //   // ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex justify-evenly h-[60vh] items-center"
      >
        <div className="flex flex-col">
          <h1 className="font-bold text-7xl mb-3">Welcome</h1>
          <div className="flex">
          <h1 className="font-bold text-7xl mr-3">to </h1>
          <motion.h1
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.50,
            }}
            className="font-bold text-7xl text-blue-600"
          >
            Crea8Gen
          </motion.h1>
          </div>

          <p className="mt-8 text-3xl">Digital Retailer of Content</p>
          <p className="mt-2 text-3xl">Watch and create Content</p>
          <motion.button
            onClick={()=>navigate('/create-post')}
            animate={{ height: 60, width: 200 }}
            className="mt-10 ml-6 text-xl btn transition ease-in-out delay-150  hover:scale-110 cursor-pointer duration-300  bg-red-400 rounded-2xl p-2 text-white"
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
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.100,
          //   // ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex justify-evenly mt-10 items-center"
      >
        <div className="flex items-center transition ease-in-out delay-150  hover:scale-110 cursor-pointer duration-300">
          <motion.img initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.100,
                // ease: [0, 0.71, 0.2, 1.01],
              }}src={content} className="w-12 h-12 mr-4" alt="" />
          <div className="flex flex-col ">
            <h1 className="font-bold text-3xl">Create Content On the Go</h1>
            <p>1000+ available</p>
          </div>
        </div>
        <div className="flex items-center transition ease-in-out delay-150  hover:scale-110 cursor-pointer duration-300">
          <motion.img initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.100,
                // ease: [0, 0.71, 0.2, 1.01],
              }}
           src={search} className="w-12 h-12 mr-4" alt="" />
          <div className="flex flex-col ">
          <h1 className="font-bold text-3xl">Find other's creations</h1>
          <p>Search by names or prompt</p>
        </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          //   // ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col items-center"
      >
        <div className="flex justify-evenly mt-32">
          <div className="flex flex-col w-[20%]">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.25,
                // ease: [0, 0.71, 0.2, 1.01],
              }}
              className="rounded-full w-[140px] h-[140px] bg-[#BBDBFF] mb-8 flex justify-center items-center"
            >

              <img className="rounded-full h-[85%] w-[85%]" src={bulb} alt="" />
            </motion.div>
            <h1 className="text-3xl   font-bold">Create your own</h1>
            <h1 className="text-2xl text-[#4589e2] font-bold">Content</h1>
            <p className="text-lg mt-6 font-semibold text-gray-500">
            Create captivating images, illustrations, and designs effortlessly by a single click.
            </p>
          </div>
          <div className="flex flex-col w-[20%]">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.25,
                // ease: [0, 0.71, 0.2, 1.01],
              }}
              className="rounded-full w-[140px] h-[140px] bg-[#B8B4F8] mb-8 flex justify-center items-center"
            >

              <img className="rounded-full h-[85%] w-[85%]" src={infinity} alt="" />
            </motion.div>
            <h1 className="text-3xl   font-bold">Explore Infinite</h1>
            <h1 className="text-2xl text-[#635CF9] font-bold">Possibilities</h1>
            <p className="text-lg mt-6 font-semibold text-gray-500">
            Explore various artistic styles, themes, and genres to bring your ideas to life.
            </p>
          </div>
          <div className="flex flex-col w-[20%]">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.4,
                delay: 0.25,
                // ease: [0, 0.71, 0.2, 1.01],
              }}
              className="rounded-full w-[140px] h-[140px] bg-[#9FF1FF] mb-8 flex justify-center items-center"
            >

              <img className="rounded-full h-[85%] w-[85%]" src={clock} alt="" />
            </motion.div>
            <h1 className="text-3xl font-bold">Save Time and </h1>
            <h1 className="text-2xl text-[#2c99ac] font-bold">Resources</h1>
            <p className="text-lg mt-6 font-semibold text-gray-500">
            Skip manual design work and costly outsourcing, generating professional visuals in no time.
            </p>
          </div>
        </div>
        <button onClick={()=>navigate('/create-post')} className="transition ease-in-out delay-150  hover:scale-110 cursor-pointer duration-300 bg-red-500 mt-12 text-white rounded-xl py-4 px-16 text-md">
          Get Started
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          //   // ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col items-center mt-24 mb-24"
      >
        <h1 className=" text-3xl font-semibold mx-auto">
          Over 1000+ different art
        </h1>
        <div className=" flex ">
          <h1 className="text-3xl font-semibold mx-2">designs </h1>
          <h1 className="text-3xl font-semibold text-blue-700 mx-auto">
            to choose from
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 200, y: -10 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: [3] }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            //   // ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex justify-center rotate-[3deg] mt-12 "
        >
          <img
            className="transition ease-in-out delay-15  hover:scale-110 cursor-pointer h-[200px] w-[200px] mx-3 rounded-2xl overflow-hidden"
            src={comp1}
            alt=""
          />
          <img
            className="transition ease-in-out delay-15  hover:scale-110 cursor-pointer h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp2}
            alt=""
          />
          <img
            className="transition ease-in-out delay-15  hover:scale-110 cursor-pointer h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp3}
            alt=""
          />
          <img
            className="transition ease-in-out delay-15  hover:scale-110 cursor-pointer h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp4}
            alt=""
          />
          <img
            className="transition ease-in-out delay-15  hover:scale-110 cursor-pointer h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp5}
            alt=""
          />
          <img
            className="transition ease-in-out delay-15  hover:scale-110 cursor-pointer h-[200px] w-[200px] mx-3 rounded-2xl overflow-clip"
            src={comp6}
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200, y: -10 }}
          whileInView={{ opacity: 1, x: 0, y: 0, rotate: [3] }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            //   // ease: [0, 0.71, 0.2, 1.01],
          }}
          className="flex justify-center rotate-[3deg] mt-8 mb-16"
        >
          <img
            className="transition ease-in-out delay-15  hover:scale-110 cursor-pointer h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp7}
            alt=""
          />
          <img
            className="transition ease-in-out delay-15  hover:scale-110 cursor-pointer h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp8}
            alt=""
          />
          <img
            className="transition ease-in-out delay-15  hover:scale-110 cursor-pointer h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp9}
            alt=""
          />
          <img
            className="transition ease-in-out delay-15  hover:scale-110 cursor-pointer h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp10}
            alt=""
          />
          <img
            className="transition ease-in-out delay-15  hover:scale-110 cursor-pointerh-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp11}
            alt=""
          />
          <img
            className="transition ease-in-out delay-15  hover:scale-110 cursor-pointer h-[200px] w-[200px] mx-3 rounded-2xl"
            src={comp12}
            alt=""
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          //   // ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col mt-8  p-16 items-center "
      >
        <h1 className="font-bold text-4xl">View and download creations from</h1>
        <h1 className="font-bold mb-20 text-blue-700 text-3xl">
          our creator community
        </h1>
        <div className="flex justify-between ">
          <motion.div 
          className='transition ease-in-out delay-150  hover:scale-110 cursor-pointer duration-300 flex flex-col -rotate-[15deg] drop-shadow-lg rounded-3xl items-center mx-16 justify-center h-64 w-52  bg-[url("https://static.vecteezy.com/system/resources/thumbnails/007/167/520/small/geometric-line-circles-pattern-background-design-perfect-for-fashion-print-fabric-clothing-free-vector.jpg")]'>
            <img
              className="h-36 drop-shadow-xl w-36 rounded-full "
              src={comp1}
              alt=""
            />
            <h1 className="font-bold text-lg mt-4">By Akash Soni</h1>
            <button className="px-2 bg-red-500 text-white rounded-full mt-2">
              Creator
            </button>
          </motion.div>
          <div className='transition ease-in-out delay-150  hover:scale-110 cursor-pointer duration-300 flex flex-col rotate-[19deg] drop-shadow-lg rounded-3xl items-center mx-8 justify-center h-64 w-52  bg-[url("https://static.vecteezy.com/system/resources/thumbnails/007/167/520/small/geometric-line-circles-pattern-background-design-perfect-for-fashion-print-fabric-clothing-free-vector.jpg")]'>
            <img
              className="h-36 drop-shadow-xl w-36 rounded-full"
              src={comp2}
              alt=""
            />
            <h1 className="font-bold text-lg mt-4">By Mayank</h1>
            <button className="px-2 bg-red-500 text-white rounded-full mt-2">
              Creator
            </button>
          </div>
          <div className=' transition ease-in-out delay-150  hover:scale-110 cursor-pointer duration-300 flex flex-col rotate-[15deg] drop-shadow-lg rounded-3xl items-center  mx-8 justify-center h-64 w-52  bg-[url("https://static.vecteezy.com/system/resources/thumbnails/007/167/520/small/geometric-line-circles-pattern-background-design-perfect-for-fashion-print-fabric-clothing-free-vector.jpg")]'>
            <img
              className="h-36 drop-shadow-xl w-36 rounded-full"
              src={comp3}
              alt=""
            />
            <h1 className="font-bold text-lg mt-4">By Yash Gupta</h1>
            <button className="px-2 bg-red-500 text-white rounded-full mt-2">
              Creator
            </button>
          </div>
          <div className='transition ease-in-out delay-150  hover:scale-110 cursor-pointer duration-300 flex flex-col -rotate-[10deg] drop-shadow-lg rounded-3xl mx-8 items-center justify-center h-64 w-52  bg-[url("https://static.vecteezy.com/system/resources/thumbnails/007/167/520/small/geometric-line-circles-pattern-background-design-perfect-for-fashion-print-fabric-clothing-free-vector.jpg")]'>
            <img
              className="h-36 drop-shadow-xl w-36 rounded-full"
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
        <button onClick={()=>navigate('/home')} className="transition ease-in-out delay-150 mt-16  hover:scale-110 cursor-pointer duration-300 bg-blue-500 px-8 py-3 text-3xl font-bold text-white rounded-full">
          
          Visit Community
        </button>
      </motion.div>

      <motion.div
        
        className="flex mt-24 mb-24 flex-col items-center"
      >
        <motion.h1 
        initial={{ opacity: 0, x:-50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          //   // ease: [0, 0.71, 0.2, 1.01],
        }}
        className="font-bold text-4xl mt-16">What are you waiting for ?</motion.h1>
        <motion.h1 
        initial={{ opacity: 0, x:50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          //   // ease: [0, 0.71, 0.2, 1.01],
        }}
        className="font-bold text-4xl text-blue-700 mt-4 mb-12">
          Create new Content Now !
        </motion.h1>
        <button onClick={()=>navigate('/create-post')} className="transition ease-in-out delay-150  hover:scale-110 cursor-pointer duration-300 bg-red-500 px-8 py-3 text-3xl font-bold text-white rounded-full">
          
          Get Started
        </button>
      </motion.div>
    </div>

    // </motion.div>
  );
};

export default FrontPage;
