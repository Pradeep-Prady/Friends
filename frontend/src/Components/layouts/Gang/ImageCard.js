import React, { useEffect, useState } from "react";
import comment from "../../../assets/images/comment.gif";
import { useDispatch, useSelector } from "react-redux";
import {
  createGangImageComment,
  getComments,
  getGangImages,
} from "../../../actions/gangImageActions";
import { Link } from "react-router-dom";
import Comments from "./Comments";

export default function ImageCard({ gangImage }) {
  const [commentOpen, setCommentOpen] = useState(false);

  const { loading, isCommentSubmitted } = useSelector(
    (state) => state.gangImageState
  );
  const [content, setContent] = useState("");

  const dispatch = useDispatch();

  const id = gangImage?._id;

  useEffect(() => {
    dispatch(getComments(id));
  }, [commentOpen]);

  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center rounded-md z-10">
        <div className="w-full h-4/5 overflow-hidden sm:w-10/12 md:w-8/12 flex items-center justify-center ">
          {/* <Link
            to={`/gang/image/${id}`}
            className="flex items-center justify-center"
          > */}
            <img
              className="w-auto h-auto rounded-xl sm:w-3/5 md:w-2/5   p-2"
              key={id}
              src={gangImage?.image}
              alt="Gang Images"
            />
          {/* </Link> */}
        </div>
        {/* 
        <div
          className={`${
            commentOpen ? "visible" : "hidden"
          } absolute w-full h-4/5 bottom-0 left-0 z-30 bg-cyan-200`}
        >
          <button onClick={(e) => setCommentOpen(!commentOpen)}>X</button>

          <Comments id={id} />
        </div> */}

        {/* <div
          className="absolute w-[150px] bottom-2  flex justify-center items-center z-2 cursor-pointer"
          onClick={(e) => setCommentOpen(!commentOpen)}
        > */}
        {/* <Link
            to={`/gang/image/${id}`}
            className="flex items-center justify-center"
          >
          <img src={comment} alt="comment " style={{ width: "40px" }} />
          <div className=" w-full text-center">
            <p className="  bottom-2 text-black ">
              {gangImage.numOfComments} Comments
            </p>
          </div>
          </Link> */}
        {/* </div> */}
      </div>
    </>
  );
}
