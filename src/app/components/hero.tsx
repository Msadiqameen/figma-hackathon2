import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaApple, FaArrowRight } from "react-icons/fa";

import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex justify-center items-center py-10">
      {/*Container with max-width */}
      <div className="max-w-[1440px] flex gap-6 justify-center">
        {/* Left Side: Navigation Menu */}
        <div className="border-r-2 border-neutral-100 p-10 hidden md:block">
          <ul className="sapce-y-4">
            {[
              "Women's Fashion",
              "Men's Fashion",
              "Electronics",
              "Home & Lifestyle",
              "Medicine",
              "Sports & Outdoor",
              "Groceries & Pets",
              "Health & Beauty",
            ].map((item, index) => (
              <li
                key={index}
                className=" flex justify-between itmes-center  text-slate-800 leading-loose hover:underline cursor-pointer hover-text-blue-500 transition-all duration-150"
              >
                {" "}
                <span> {item}</span>
                {index < 2 && <IoIosArrowForward className=" text-lg ml-2" />}
              </li>
            ))}
          </ul>
        </div>

        {/*Right Side: Hero Content */}
        <div className="flex items-center  bg-black rounded-lg p-6 px-10">
          {/* Text Content */}
          <div className=" text-white flex flex-col justify-center space-y-5 sm:w[180px] md:w[300px] lg:w-[300px]">
            {/* Icone and Series Text */}
            <div className="flex items-center gap-2">
              <FaApple className="sm:text-2xl md:text-4xl" />
              <span className="sm:text-sm md:text-base font-semibold">
                IPhone 14 Series
              </span>
            </div>
            {/*Main Heading*/}
            <h1 className="sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
              Up to 10%
            </h1>
            <h1 className="sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-snug"> off Voucher </h1>
            {/* Shop Now Button */}
            <Link
              href="#products"
              className="text-white underline underline-offset-4 hover:font-semibold flex items-center gap-2"
            >
              Shop Now
              <FaArrowRight className=" text white" />
            </Link>
          </div>
          {/*Image*/}
          <div className="ml-auto">
            <img src="../iphone.png" alt="iphone" />
          </div>
        </div>
      </div>
    </div>
  );
}
