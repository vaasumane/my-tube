import React from 'react'
import { useDispatch } from 'react-redux';
import{ toggleMenu } from '../Utils/appSlice';
import { Link } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const handleToggleMenu = () =>{
        dispatch(toggleMenu());
    }

  return (
    <>
      <div className='grid grid-flow-col p-2 m-2 items-center '>
        <div className='col-span-1 flex items-center'>
            <img src="./hamburger-menu.png"  className='h-8 cursor-pointer' onClick={()=>handleToggleMenu()}/>
            <img src='./youtube-logo.jpg' className='h-20'/>
        </div>
        <div className='col-span-10 text-center'>
            <input type="text" className='w-1/2 border border-gray-400 p-2 rounded-l-full' />
            <button type="button" className='border border-gray-400 p-2 rounded-r-full bg-gray-100'>🔍</button>
        </div>
        <div className='col-span-1 text-center'>
            <img src="./user_image.png"  className='h-8'/>
        </div>
      </div>
    </>
  )
}

export default Header
