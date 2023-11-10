import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div>
    <div className="mx-20">
    <div className=" my-14">
      <Image
        src={"/banner1.avif"}
        alt="banner1"
        width={200}
        height={200}
        className="h-70 w-full"
      />
    </div>
    <div className="mb-14">
      <Image
        src={"/banner2.avif"}
        alt="banner2"
        width={200}
        height={200}
        className="h-30 w-full"
      />
    </div>
   
  </div>
    </div>
  )
}

export default Banner
