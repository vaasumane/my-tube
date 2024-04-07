import React from 'react'

const Shimmer = () => {
    return (
        <>
            <div className='flex flex-wrap  p-2 justify-center'>
                {Array(10).fill("").map((e,index) => (
                <div className='' key={index}>
                    <div className='h-32 w-60 rounded-lg p-5 m-3 bg-gray-200'></div>
                    <span className='w-60 p-1 m-3 rounded-lg bg-gray-200 shadow block'></span>
                    <span className='w-60 p-1 m-3 rounded-lg bg-gray-200 shadow block'></span>
                </div>

                ))}
            </div>
        </>
    )
}

export default Shimmer
