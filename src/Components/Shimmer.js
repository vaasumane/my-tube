import React from 'react'

const Shimmer = () => {
    return (
        <>
            <div className='flex flex-wrap  p-2'>
                {Array(10).fill("").map((e,index) => (
                <div className='w-64 h-auto' key={index}>
                    <div className='h-32  rounded-lg p-5 m-3 bg-gray-200'></div>
                    <span className=' p-1 m-3 rounded-lg bg-gray-200 shadow block'></span>
                    <span className=' p-1 m-3 rounded-lg bg-gray-200 shadow block'></span>
                </div>

                ))}
            </div>
        </>
    )
}

export default Shimmer
