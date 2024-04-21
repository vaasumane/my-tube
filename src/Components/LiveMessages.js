import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { RandomNamegenerate, makeRandomString } from "../Utils/messagehelper";

const SingleChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center gap-3 py-1 ">
      <img src="./user_image.png" className="h-8" />
      <span className="font-semibold">{name}</span>
      <span>{message}</span>
    </div>
  );
};
const LiveMessages = () => {
    const[liveMessage,setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const getLiveMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const messageInterval = setInterval(() => {
      dispatch(
        addMessage({
          name: RandomNamegenerate(),
          message: makeRandomString(20) + " 🚀",
        })
      );
    }, 1000);
    return () => {
      clearInterval(messageInterval);
    };
  }, []);
  return (
    <>
      <div className="border border-gray-200 p-2 m-2 rounded-lg flex flex-col-reverse md:h-[500px] overflow-y-scroll no-scrollbar">
        {getLiveMessages.length > 0 &&
          getLiveMessages.map((livemessage, index) => {
            return (
              <SingleChatMessage
                key={"livemessage" + index}
                name={livemessage.name}
                message={livemessage.message}
              />
            );
          })}
      </div>
      <form className="p-2 border border-gray-200" onSubmit={(e)=>{
        e.preventDefault();
        dispatch(
          addMessage({
            name: "test",
            message: liveMessage,
          })
        );
        setLiveMessage("");
      }}>
        <input type="text" className="p-1  w-96" value={liveMessage} onChange={(e)=> setLiveMessage(e.target.value)} />
        <button className="bg-green-100 p-1 mx-2">Send</button>
      </form>
    </>
  );
};

export default LiveMessages;
