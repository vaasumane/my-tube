import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_URL } from "../Utils/constant";
import { cacheResult } from "../Utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [showSuggestionList, setShowSuggestionList] = useState(false);
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const getSearchData = useSelector((store) => store.search);
  useEffect(() => {
    const timeInterval = setTimeout(() => {
      if (getSearchData[searchQuery]) {
        setSearchList(getSearchData[searchQuery]);
      } else {
        getSearchedItems();
      }
    }, 200);
    return () => {
      clearTimeout(timeInterval);
    };
  }, [searchQuery]);
  const getSearchedItems = async () => {
    const data = await fetch(YOUTUBE_SEARCH_URL + searchQuery);
    const response = await data.json();
    setSearchList(response?.[1]);
    dispatch(
      cacheResult({
        [searchQuery]: response?.[1],
      })
    );
  };
  return (
    <>
      <div className="grid grid-flow-col p-2 m-2 items-center ">
        <div className="col-span-1 flex items-center">
          <img
            src="./hamburger-menu.png"
            className="h-8 cursor-pointer"
            onClick={() => handleToggleMenu()}
          />
          <a href="/">
            <img src="./youtube-logo.jpg" className="h-20" />
          </a>
        </div>
        <div className="col-span-10 text-center">
          <div className="relative">
            <input
              type="text"
              className="w-1/2 border border-gray-400 p-2 rounded-l-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={()=>setShowSuggestionList(true)}
              onBlur={()=>setShowSuggestionList(false)}
            />
            <button
              type="button"
              className="border border-gray-400 p-2 rounded-r-full bg-gray-100"
            >
              🔍
            </button>
            {showSuggestionList && <ul className="absolute left-[23%] mr-4  w-1/2 bg-white rounded-lg">
              {
                searchList.map((search) => {
                  return <li key={search} className="py-1 hover:bg-gray-100 text-start p-3">{"🔍 " + search}</li>;
                })}
            </ul> }
            
          </div>
        </div>
        <div className="col-span-1 text-center">
          <img src="./user_image.png" className="h-8" />
        </div>
      </div>
    </>
  );
};

export default Header;
