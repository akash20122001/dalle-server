import React from "react";
import {logo} from "../assets";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full flex  justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        <div className="flex">
          <img src={logo} className="h-16 mr-2" alt="" />
          <div>

          <div className="text-black font-bold text-2xl">Crea8tive</div>
          <div className="text-black font-bold text-2xl">Gen</div>
          </div>
        </div>
        <div className="flex">
          <h1 onClick={()=>navigate('/')} className="px-4 font-bold text-xl cursor-pointer">Home</h1>
          <h1 onClick={()=>navigate('/create-post')} className="px-4 font-bold text-xl cursor-pointer">Create</h1>
          <h1 onClick={()=>navigate('/home')} className="px-4 font-bold text-xl cursor-pointer">Our Community</h1>
        </div>
        <div className="flex">
          <button onClick={()=>navigate('/create-post')} className="transition ease-in-out delay-150  hover:scale-110 cursor-pointer duration-300 px-4 font-bold rounded-2xl bg-blue-600 text-white py-2 text-xl">Create</button>
          
        </div>

      </div>
    </div>
  );
};

export default Navbar;
