import Image from "next/image";
import React from "react";

const Blocks = ({title, para}) => {
  return (
    <div className="w-60 p-3 h-full flex items-center border-r border-gray-200">
      <Image
        src={"/demo.svg"}
        alt="demo"
        width={0}
        height={0}
        className="w-10 h-10 rounded-full"
      />
      <div className="font-bold p-3">
        <h3>{title}</h3>
        <p className="text-gray-400 text-xs line-clamp-1">{para}</p>
      </div>
    </div>
  );
};

export default Blocks;
