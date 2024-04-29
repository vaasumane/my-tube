import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setCategory } from "../Utils/searchSlice";

const Sidebar = () => {
  const isMenuOpenStatus = useSelector((store) => store.app.isMenuOpen);
  const dispatch = useDispatch();

  if(!isMenuOpenStatus) return null;
  return (
    <>
      <div className="hidden lg:block  px-4 py-2 shadow-lg m-2 lg:w-1/4 sticky-sidebar">
        <ul className=" border-b-2 pb-2">
          <li className="pb-2 font-bold"><Link to="/">Home</Link></li>
          <li className="pb-2" ><Link to="/" onClick={()=>  dispatch(setCategory(24))}>Shorts</Link></li>
        </ul>
        {/* <h2 className="font-bold py-2 "> You</h2>
        <ul className=" border-b-2 pb-2">
          <li className="pb-2">History</li>
          <li className="pb-2">Playlists</li>
          <li className="pb-2">Watch laters</li>
          <li className="pb-2">Linked videos</li>
          <li className="pb-2">Downloads</li>
        </ul> */}
        {/* <h2 className="font-bold py-2 ">Subscriptions</h2>
        <ul className=" border-b-2 pb-2">
          <li className="pb-2">Vaasu</li>
          <li className="pb-2">Browse Channel</li>
        </ul> */}
        <h2 className="font-bold py-2 ">Explore</h2>
        <ul className=" border-b-2 pb-2">
          <li className="pb-2"><Link to="/" onClick={()=>  dispatch(setCategory(20))}>Gaming</Link></li>
          <li className="pb-2"><Link to="/" onClick={()=>  dispatch(setCategory(17))}>Sports</Link></li>
          <li className="pb-2"><Link to="/" onClick={()=>  dispatch(setCategory(10))}>Music</Link></li>
          <li className="pb-2"><Link to="/" onClick={()=>  dispatch(setCategory(24))}>News</Link></li>
          <li className="pb-2"><Link to="/" onClick={()=>  dispatch(setCategory(23))}>Comedy</Link></li>
          <li className="pb-2"><Link to="/" onClick={()=>  dispatch(setCategory(28))}>Technology</Link></li>
          
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
