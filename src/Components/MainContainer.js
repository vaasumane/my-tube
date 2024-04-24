import React from 'react'
import ButtonList from './ButtonList'
import VideoList from './VideoList'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const isMenuOpenStatus = useSelector((store) => store.app.isMenuOpen);

  return (
    <div className={"col-span-11 w-full" + (isMenuOpenStatus ? " lg:w-5/6" : " lg:w-full ")}>
      <ButtonList/>
      <VideoList/>
    </div>
  )
}

export default MainContainer
