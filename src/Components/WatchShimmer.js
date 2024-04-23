import React from "react";
import RelatedShimmer from "./RelatedShimmer";

const WatchShimmer = () => {
  return (
    <div className="w-full">
      <div className="flex justify-between p-5 m-2 ">
        <div className="w-2/3">
          <div className="rounded-xl md:w-[900px] w-72 h-40 md:h-[500px] bg-gray-200"></div>
          <span className=' p-2 my-3 md:w-[900px]  w-72  rounded-lg bg-gray-200 shadow block'></span>
          <span className=' p-2 my-3 md:w-[900px]  w-72  rounded-lg bg-gray-200 shadow block'></span>

        </div>
        <div className=" hidden lg:block lg:w-1/3 border border-gray-100 rounded-lg">
        {/* {Array(7).fill("").map((e,index) => (
                <div className='h-20 flex items-center gap-3 py-1' key={index}>
                    <div className='h-8  rounded-full p-5 m-3 bg-gray-200'></div>
                    <span className=' p-2 w-full m-3 rounded-lg bg-gray-200 shadow block'></span>
                </div>

                ))} */}
                <RelatedShimmer/>
        </div>
      </div>
    </div>
  );
};

export default WatchShimmer;
