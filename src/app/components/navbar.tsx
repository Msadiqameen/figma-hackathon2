import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch,CiHeart } from "react-icons/ci";
import { HiMiniShoppingCart } from "react-icons/hi2";

export default function navbar() {
  return (
    <header className=" bg-white shadow-sm border-b mx-auto flex flex-col ">
      <div className=" bg-black text-white py-2 text-sm flex justify-between items-center px-8 w-full">
        <div className="text-center flex-1">
          Summer sale for All Swim suits And Free Express Delivery - OFF 50%!
          <a href="#" className="underline hover-text-slate-300">
            {" "}
            ShopNow{" "}
          </a>
        </div>
        <div className="flex items-center gap-[2px]">
          <div className=" text-white text-sm font-normal leading-[21px]">
            English
          </div>
          <RiArrowDropDownLine className=" text-white text-3xl" />
        </div>
      </div>
      {/* Main Navigation*/}
      <div className="flex justify-between items-center px-20 py-4">
        <h1 className="text-2xl font-bold text-black px-12"> Exclusive </h1>

        <nav className="hidden  md:flex space-x-8 items-center">
          <a href="#" className=" text-slate-600  hover:text-black underline">
            Home
          </a>
          <a href="#" className=" text-slate-600  hover:text-black ">
            Contact
          </a>
          <a href="#" className=" text-slate-600  hover:text-black ">
            About
          </a>
          <a href="#" className=" text-slate-600  hover:text-black ">
            Sigup
          </a>
        </nav>

        {/* Serac Icons*/}

        <div className=" flex items-center space-x-6">
          <div className=" hidden lg:flex items-center bg-slate-100 rounded-md px-3 py-2">
            <input
              type="text"
              placeholder="what are you looking for?"
              className=" bg-slate-100 outline-none text-sm"
            />
            <CiSearch />
          </div>
          <CiHeart />
          <HiMiniShoppingCart />
        </div>
      </div>
    </header>
  );
}
