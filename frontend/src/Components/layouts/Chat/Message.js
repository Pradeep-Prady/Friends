import React, { useState } from "react";
import img from "../../../assets/images/default_avatar.png";
import { useSelector } from "react-redux";

export default function Message({ chat }) {
  const { user } = useSelector((state) => state.authState);

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

  return (
    <div
      className={`w-full my-2 text-white overflow-hidden ${
        chat?.user?._id !== user?._id ? "flex justify-start" : "flex justify-end"
      }`}
    >
      {chat?.user?._id !== user._id ? (
        <>
          <div className="flex w-10/12 p-2 bg-stone-950 rounded-md">
            <div className="w-2/12">
              <img
                src={chat?.user?.avatar ?? img}
                alt="Message-User"
                className="rounded-3xl w-[40px] h-[40px]"
              />
            </div>
            <div className="w-10/12 ml-1">
              <div>
                <span className="text-xs text-stone-500">{chat?.user?.name}</span>
              </div>
              <div className="">
                <p className="text-sm">{chat?.text}</p>
              </div>

              <div className="text-stone-700">
                <span className="text-xs ">{formattedTime}</span>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex w-10/12 p-2 glass rounded-md">
            <div className="w-9/12 md:10/12  mr-2">

              <div className="w-full text-end">
                <span className="text-xs text-stone-900 ">
        
                  {chat?.user?.name}{" "}
                </span>
              </div>
              <div className="w-full md:10/12 text-end">
                <p className="text-sm">{chat?.text}</p>
              </div>

              <div className="text-stone-900 w-full text-end">
                <span className="text-xs ">{formattedTime}</span>
              </div>
            </div>
            <div className="w-3/12 md:w-2/12 flex items-start justify-center">
              <img
                src={chat?.user?.avatar ?? img}
                alt="Message-User"
                className="rounded-3xl w-[40px] h-[40px]"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
