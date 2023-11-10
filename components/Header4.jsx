import React from "react";
import Image from "next/image";
const Header4 = () => {
  return (
    <div className="flex my-14 mx-20 border-2 justify-between items-center rounded-lg border-gray-300 px-5">
      <div className="flex">
        <Image
          src={"/fire.jpg"}
          alt="/fire.jpg"
          width={100}
          height={100}
          className="w-32 h-26 rounded-full mr-5"
        />
        <div className="">
          <p className="font-bold mt-10">Get access to exclusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>
      </div>
      <div className="flex">
        <input
          type="email"
          className="px-6 py-2  h-14 outline-none  mr-5 rounded-lg border border-gray-300"
          placeholder="e.g. john@gmail.com"
        />
        <button
          type="Submit"
          className="w-32 h-12 bg-red-500 text-xl text-white cursor-pointer"
        >
          Notify me
        </button>
      </div>
    </div>
  );
};

export default Header4;
