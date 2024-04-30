import React from "react";
import RelatedShimmer from "./RelatedShimmer";

const WatchShimmer = () => {
  return (
    <div className="col-span-11 p-5 lg:m-2 w-full">
      <div className="lg:flex justify-between  ">
        <div className="lg:w-2/3 m-2">
          <div className="rounded-xl xl:w-[900px] md:w-[700px] w-72 h-40 md:h-[500px] bg-gray-200"></div>
          <span className=' p-2 my-3 xl:w-[900px] md:w-[700px]  w-72  rounded-lg bg-gray-200 shadow block'></span>
          <span className=' p-2 my-3 xl:w-[900px] md:w-[700px]  w-72  rounded-lg bg-gray-200 shadow block'></span>

        </div>
        <div className=" hidden lg:block lg:w-1/4 ml-3 border border-gray-100 rounded-lg">
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
