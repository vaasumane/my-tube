import React, { useEffect, useState } from "react";
import Button from "./Button";
import { YOUTUBE_CATEGORIES_URL } from "../Utils/constant";
import { setCategory } from "../Utils/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const ButtonList = () => {
  // const ButtonListArr =["All","Music","T-series","Javascript","Bollywood Music","Mixes","Live","Animies","Gaming","Game Shows","Cricket","Electronic Music","Comedy","Shorts","Watched","New to you"];
  const ButtonListArr = [
    "All",
    "Music",
    "T-series",
    "Javascript",
    "Bollywood Music",
    "Mixes",
    "Live",
    "Animies",
    "Gaming",
    "Game Shows",
    "Cricket",
    "Electronic Music",
    "Comedy",
    "Shorts",
    "Watched",
    "New to you",
  ];
  const [category, setCategoryList] = useState([]);
  const getcategory = useSelector((store) => store.search.category);

  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = async () => {
    const data = await fetch(YOUTUBE_CATEGORIES_URL);
    const response = await data.json();
    setCategoryList(response?.items);
  };
  const dispatch = useDispatch();
  const HandleSetCategoryAll = ()=>{
    dispatch(setCategory(""));
  }
  return (
    <>
      <div className="container button-container  md:block pb-5 px-5">
        <div className="flex flex-nowrap overflow-auto w-full no-scrollbar">
          <div>
            <button
              className={` py-2 m-2 rounded-lg px-3 ${getcategory === "" || getcategory === undefined ? "bg-black text-white" : "bg-gray-200"}`}

              onClick={() => HandleSetCategoryAll()}
            >
            All
            </button>
          </div>
          {category.length > 0  && category.map((button, index) => (
            <Button key={"btn-" + index} name={button} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ButtonList;
