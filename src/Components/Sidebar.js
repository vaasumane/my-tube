import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpenStatus = useSelector((store) => store.app.isMenuOpen);

  if(!isMenuOpenStatus) return null;
  return (
    <>
      <div className="col-span-1 px-4 py-2 shadow-lg m-2 w-full">
        <ul className=" border-b-2 pb-2">
          <li className="pb-2"><Link to="/">Home</Link></li>
          <li className="pb-2">Shorts</li>
          <li className="pb-2">Subscriptions</li>
        </ul>
        <h2 className="font-bold py-2 "> You</h2>
        <ul className=" border-b-2 pb-2">
          <li className="pb-2">History</li>
          <li className="pb-2">Playlists</li>
          <li className="pb-2">Watch laters</li>
          <li className="pb-2">Linked videos</li>
          <li className="pb-2">Downloads</li>
        </ul>
        <h2 className="font-bold py-2 ">Subscriptions</h2>
        <ul className=" border-b-2 pb-2">
          <li className="pb-2">Vaasu</li>
          <li className="pb-2">Browse Channel</li>
        </ul>
        <h2 className="font-bold py-2 ">Explore</h2>
        <ul className=" border-b-2 pb-2">
          <li className="pb-2">Trending</li>
          <li className="pb-2">Shopping</li>
          <li className="pb-2">Music</li>
          <li className="pb-2">Movies</li>
          
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
