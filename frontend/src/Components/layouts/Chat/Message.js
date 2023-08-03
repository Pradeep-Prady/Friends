import React, { useState } from "react";
import img from "../../../assets/images/bg3.jpg";
import { useSelector } from "react-redux";

export default function Message({ chat }) {
  const { user } = useSelector((state) => state.authState);
  const [prevDate, setPrevDate] = useState(null);

  var createdAt = String(chat.createdAt);
  var date = new Date(createdAt);

  var optionsDate = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  var formattedDate = date.toLocaleDateString("en-GB", optionsDate);

  var optionsTime = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };
  var formattedTime = date.toLocaleTimeString("en-GB", optionsTime);

  const displayDateCenter = () => {
    if (!prevDate || date.toDateString() !== prevDate.toDateString()) {
      setPrevDate(date);
      return (
        <div className="w-full text-center my-1">
          <span className="text-stone-500">{formattedDate}</span>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div
      className={`w-full my-2 text-white ${
        chat?.user !== user?._id ? "flex justify-start" : "flex justify-end"
      }`}
    >
      {chat.user !== user._id ? (
        <>
          <div className="flex w-8/12 p-2 bg-stone-950 rounded-md">
            <div className="w-2/12">
              <img
                src={img}
                alt="Message-User"
                className="rounded-2xl w-[40px] h-[40px]"
              />
            </div>
            <div className="w-10/12 ml-1">
              {displayDateCenter()}
              <div>
                <span className="text-xs text-stone-500">{chat.name}</span>
              </div>
              <div className="">
                <p className="text-sm">{chat.text}</p>
              </div>

              <div className="text-stone-700">
                <span className="text-xs ">{formattedTime}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex w-8/12 p-2 bg-stone-950 rounded-md">
            <div className="w-10/12 mr-2">
              {displayDateCenter()}
              <div className="w-full text-end">
                <span className="text-xs text-stone-500 "> {chat.name} </span>
              </div>
              <div className="w-full text-end">
                <p className="text-sm">{chat.text}</p>
              </div>

              <div className="text-stone-700 w-full text-end">
                <span className="text-xs ">{formattedTime}</span>
              </div>
            </div>
            <div className="w-2/12">
              <img
                src={img}
                alt="Message-User"
                className="rounded-2xl w-[40px] h-[40px]"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
