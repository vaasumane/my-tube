import React from "react";
import Button from "./Button";

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
  return (
    <>
     
      <div className="container button-container hidden md:block pb-5">
        <div className="flex flex-nowrap overflow-auto w-full no-scrollbar">
          {ButtonListArr.map((button, index) => (
            <Button key={"btn-" + index} name={button} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ButtonList;
