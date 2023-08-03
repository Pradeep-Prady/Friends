import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  createGangImageComment,
  getComments,
  getGangImage,
} from "../../../actions/gangImageActions";

import Comments from "./Comments";
import {
  clearCommentSubmitted,
  clearError,
} from "../../../slices/gangImageSlice";

export default function ImageCardDetails({ id }) {
  const [content, setContent] = useState("");
  const [commentOpen, setCommentOpen] = useState(false);

  const {
    loading,
    gangImage = {},
    isCommentSubmitted,
    error,
    comments=[],
  } = useSelector((state) => state.gangImageState);

  const dispatch = useDispatch();

  const commentHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("content", content);
    formData.append("gangImageId", id);
    dispatch(createGangImageComment(formData));
    dispatch(getComments(id));

  };

  useEffect(() => {
    if (isCommentSubmitted) {
      dispatch(clearCommentSubmitted());
      dispatch(getComments(id));
    }
    if (error) {
      dispatch(clearError());

      return;
    }
  }, [dispatch, isCommentSubmitted, id, error]);

  useEffect(() => {
    dispatch(getComments(id));
    dispatch(getGangImage(id));
  }, [dispatch, id]);

  return (
    <div className="w-full flex-row items-center justify-center ">
      <div className="w-full h-screen flex items-center justify-center">
        <img
          src={gangImage?.image}
          alt="GangImage"
          className="w-full h-auto sm:h-screen sm:w-auto"
        />
      </div>
      {/* <p onClick={(e) => setCommentOpen(!commentOpen)}>Comments</p>
      <div className={` ${commentOpen ? "visible" : "hidden"}`}>
        <Comments id={gangImageData._id} />
      </div> */}
      <Comments id={ id} />


      {/* <div className="w-full h-screen ">
        <div className="w-full h-1/5 flex items-center justify-center">
          <form onSubmit={commentHandler} className="w-full flex  glass mx-2 ">
            <input
              type="text "
              name="content"
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type your Comment"
              className="w-4/5 p-2 bg-transparent outline-none text-black border-r-4"
            />
            <div className="w-1/5 flex items-center justify-center">
              <button type="submit">
                <i className="fa-solid fa-paper-plane text-xl text-black"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="w-full flex h-4/5 items-center justify-center">
          <div className="w-full h-full sm:w-8/12 md:w-6/12 ">
            <div className="overflow-y-scroll w-full h-4/5  p-3 scroll  z-10 rounded-lg">
              {comments && comments?.map((comment) => (
                <div
                  className="flex glass p-2 my-2 rounded-sm "
                  key={comment._id}
                >
                  <div className="w-1/5 h-[50px] ">
                    <img
                      src={comment?.avatar}
                      alt="profile"
                      className="w-[50px] h-[50px] rounded-3xl"
                    />
                  </div>
                  <div className="ml-2 w-4/5">
                    <p className="text-xs text-stone-400">12.57</p>
                    <p className="text-sm text-stone-950">
                      {" "}
                      {comment?.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
