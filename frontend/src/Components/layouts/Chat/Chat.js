import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { getChats, sendMessage } from "./../../../actions/chatActions";
import MetaData from "../MetaData";
import Loader from "./../Loader";
import { clearChatCreated } from "../../../slices/chatSlice";
// import Pusher from "pusher";
import Pusher from "pusher-js/with-encryption";
import axios from "axios";

export default function Chat() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const [messages, setMessages] = useState([]);

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
    dispatch(clearChatCreated());
  };

  useEffect(() => {
    // if (isChatCreated) {
    //   dispatch(getChats());
    //   dispatch(clearChatCreated());
    // }
    dispatch(getChats());
  }, [dispatch, isChatCreated]);

  // const chatContainerRef = useRef(null);

  // // Scroll to the bottom of the chat container whenever new messages are added

  // if (chatContainerRef.current) {
  //   if (chatContainerRef.current.scrollTop === 0) {
  //     chatContainerRef.current.scrollTop =
  //       chatContainerRef.current.scrollHeight;
  //   }
  // }

  useEffect(() => {
    axios.get("/api/v1/chats").then((response) => {
      setMessages(response.data.gang_chats);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("063411480e1c559a7529", {
      cluster: "ap2",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  // console.log(messages);

  return (
    <>
      {/* {loading ? (
        <Loader />
      ) : (
        <> */}{" "}
      <MetaData title={"Chat"} />{" "}
      <div className="w-full h-screen bg-stone-800 py-5 px-2 flex justify-center items-center">
        <div className="w-full h-full  bg rounded-md sm:w-3/5 md:w-2/5">
          <div
            // ref={chatContainerRef}
            style={{ height: "90%" }}
            className=" w-full  p-2 overflow-y-scroll scroll"
          >
            {messages?.map((chat) => (
              <Message chat={chat} key={chat._id} />
            ))}
          </div>
          <form
            onSubmit={submitHandler}
            style={{ height: "10%" }}
            className="glass w-full flex justify-center items-center px-2"
          >
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="text "
              className="w-10/12  py-1 px-2 rounded-sm outline-0 glass text-black"
            />
            <button type="submit" className="w-2/12 glass ">
              <i className="fa-solid fa-paper-plane text-xl text-black"></i>
            </button>
          </form>
        </div>
      </div>
    </>
    //   )}
    // </>
  );
}
