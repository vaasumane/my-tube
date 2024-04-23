import React from 'react'

const RelatedShimmer = () => {
  return (
    <div>
        {Array(7).fill("").map((e,index) => (
            <div className="p-2 shadow flex  gap-3 rounded-lg w-full my-3">
            <div className='relative'>
            
              <div className="w-44 h-24 object-cover rounded-lg bg-gray-200"
            >

            </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="text-base font-semibold word-break-all bg-gray-200 m-2 p-1 w-44"></div>
              <div className="text-xs bg-gray-200 m-2 p-1 w-44"></div>
              <div className="text-xs bg-gray-200 m-2 p-1 w-20"></div>
             
            </div>
          </div>
      
    ))}

    </div>
  )
}

export default RelatedShimmer
