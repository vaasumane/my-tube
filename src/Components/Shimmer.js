import React from 'react'

const Shimmer = () => {
    return (
        <>
            <div className='flex flex-wrap  p-2' id="video-list">
                {Array(10).fill("").map((e,index) => (
                <div className='w-72 h-auto' key={index}>
                    <div className='h-40  rounded-lg p-5 m-3 bg-gray-200'></div>
                    <span className=' p-1 m-3 rounded-lg bg-gray-200 shadow block'></span>
                    <span className=' p-1 m-3 rounded-lg bg-gray-200 shadow block'></span>
                </div>

                ))}
            </div>
        </>
    )
}

export default Shimmer
