'use-client'
import React from "react";

const Header3 = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-red-400 h-50">
      <div className=" p-5">
        <h2 className="text-3xl text-center text-white font-bold">
          Over 157,000 hotels and homes across 35 countries
        </h2>
        <div className="mx-20 grid grid-cols-5 my-3">
          <input
            autoComplete="off"
            type="text"
            placeholder="Search by city, hotel, or neighborhood"
            className=" h-14 outline-none px-5 col-span-2 border-r-2 border-gray-500"
          />
          <input
            autoComplete="off"
            type="text"
            placeholder="search"
            className=" h-14 outline-none px-5 border-r-2 border-gray-500 col-span-1"
          />
          <input
            autoComplete="off"
            type="text"
            placeholder="search"
            className=" h-14 outline-none px-5"
          />
          <button className="h-14 px-3 py-2 col-span-1 bg-green-700 hover:cursor-pointer hover:bg-green-900 text-white ">
            Search
          </button>
        </div>
        <div className="flex">
          <button className="h-12 px-3  hover:border-2 border-white   hover:cursor-pointer  text-white mr-5 hover:bg-gray-500 rounded-xl">
            Continue your Search
          </button>
          <button className="h-12 px-3  hover:border-2 border-white  hover:cursor-pointer  text-white mr-5 hover:bg-gray-500 rounded-xl ">
            Homestay in India hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header3;
