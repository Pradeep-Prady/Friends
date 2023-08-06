import React from "react";
import Chat from "./Chat/Chat";
import { Link } from "react-router-dom";

export default function GroupChat() {
  return (
    <div className="w-full h-screen bg-stone-800 flex items-center justify-center  chatbg">
      <Link to="/gang/chat" className="text-sm text-black ">Make Chat</Link>
    </div>
  );
}
