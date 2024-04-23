import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_URL } from "../Utils/constant";
import { cacheResult, setSearchText } from "../Utils/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [showSuggestionList, setShowSuggestionList] = useState(false);
  const dropdownRef = useRef(null);
  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const getSearchData = useSelector((store) => store.search.searchItems);
  useEffect(() => {
    const timeInterval = setTimeout(() => {
      if (getSearchData[searchQuery]) {
        setSearchList(getSearchData[searchQuery]);
        setShowSuggestionList(true);
      } else {
        getSearchedItems();
      }
    }, 200);
    return () => {
      clearTimeout(timeInterval);
    };
  }, [searchQuery]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSuggestionList(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    const handleScroll = (event) =>{
        const scrollTarget = document.getElementById('scrollTarget');
        if (window.scrollY > 100) {
          scrollTarget.classList.add('fixed');
        } else {
          scrollTarget.classList.remove('fixed');
        }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
    
  }, []);

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
  const setSelectedText = (searchText) => {
    dispatch(setSearchText(searchText));
    setShowSuggestionList(false);
    setSearchQuery(searchText);
    window.location.href = "/";
  };
  const HandleSearchChange = (searchText) => {
    setSearchQuery(searchText);
    if (searchText === "") {
      dispatch(setSearchText(""));
    }
  };
 
  return (
    <>
      <header className="flex shadow-sm bg-white font-[sans-serif] min-h-[70px] relative">
        <div id="scrollTarget" className="flex flex-wrap items-center justify-between sm:px-10 px-6 py-3  lg:gap-y-4 gap-y-6 gap-x-4 w-full  bg-white z-10">
          <div className=" flex items-center">
            <img
              src="./hamburger-menu.png"
              className="h-8 cursor-pointer"
              onClick={() => handleToggleMenu()}
            />
            <a href="/">
              <img src="./youtube-logo.jpg" className="h-20" />
            </a>
          </div>
          <div className="flex items-center space-x-8 max-md:ml-auto md:hidden">
            <img src="./user_image.png" className="h-8" />
          </div>
          <div className="lg:w-2/4 max-md:w-full relative">
            <input
              type="text"
              className=" border border-gray-400 p-2 rounded-l-full w-10/12"
              value={searchQuery}
              onChange={(e) => HandleSearchChange(e.target.value)}
              onFocus={() => setShowSuggestionList(true)}
              // onBlur={() => setShowSuggestionList(false)}
            />
            <button
              type="button"
              className="border border-gray-400 p-2 rounded-r-full bg-gray-100"
            >
              🔍
            </button>
            {showSuggestionList && (
              //
              <ul className="absolute mr-4 w-10/12 bg-white rounded-lg" ref={dropdownRef}>
                {searchList.map((search) => {
                  return (
                    <li
                      key={search}
                      className="py-1 hover:bg-gray-100 text-start p-3"
                      onClick={() => setSelectedText(search)}
                    >
                      {"🔍 " + search}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          <div className="hidden md:block  items-center space-x-8 max-md:ml-auto">
            <img src="./user_image.png" className="h-8" />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
