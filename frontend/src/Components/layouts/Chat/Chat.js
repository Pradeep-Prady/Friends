import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { getChats, sendMessage } from "./../../../actions/chatActions";
import MetaData from "../MetaData";
import Loader from "./../Loader";
import { clearChatCreated } from "../../../slices/chatSlice";

export default function Chat() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const { chats, loading, isChatCreated } = useSelector(
    (state) => state.chatsState
  );
  const { isAuthenticated } = useSelector((state) => state.authState);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("text", text);
    dispatch(sendMessage(formData));
    setText("");
  };

  useEffect(() => {
    if (isChatCreated) {
      // dispatch(getChats());
      dispatch(clearChatCreated());
    }
    dispatch(getChats());
  }, [dispatch, isChatCreated]);

  const chatContainerRef = useRef(null);

  // Scroll to the bottom of the chat container whenever new messages are added
 
  // useEffect(() => {
  //   if (chatContainerRef.current) {
  //     chatContainerRef.current.scrollTop =
  //       chatContainerRef.current.scrollHeight;
  //     // console.log("top", chatContainerRef.current.scrollTop);
  //     // console.log(chatContainerRef.current.scrollHeight);
  //   }
  // }, [chats]);

  useEffect(() => {
    if (chatContainerRef.current) {
      const isAtBottom =
        chatContainerRef.current.scrollHeight - chatContainerRef.current.scrollTop <=
        chatContainerRef.current.clientHeight + 10;
  
      if (!isAtBottom) {
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      }
    }
  }, [chats]);
  
  

  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : (
        <> */}{" "}
      <MetaData title={"Chat"} />{" "}
      <div className="w-full h-screen bg-stone-800 py-5 px-2 flex justify-center items-center">
        <div className="w-full h-full bg-white rounded-md sm:w-3/5 md:w-2/5">
          <div
            ref={chatContainerRef}
            style={{height: '90%'}}
            className=" w-full review p-2 overflow-y-scroll scroll"
          >
            {chats?.map((chat) => (
              <Message chat={chat} key={chat._id} />
            ))}
          </div>
          <form
            onSubmit={submitHandler}
            style={{height: '10%'}}
            className="  bg-stone-900 w-full flex justify-center items-center px-2"
          >
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text "
              className="w-10/12  py-1 px-2 rounded-sm outline-0 glass text-white"
            />
            <button type="submit" className="w-2/12 text-white ">
              <i className="fa-solid fa-paper-plane text-xl text-white"></i>
            </button>
          </form>
        </div>
      </div>
    </>
    //   )}
    // </>
  );
}
