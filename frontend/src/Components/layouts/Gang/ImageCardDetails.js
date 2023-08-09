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

export default function ImageCardDetails({ indexValue }) {
  const [content, setContent] = useState("");
  const [commentOpen, setCommentOpen] = useState(false);

  const { id } = useParams();
  const {
    loading,
    gangImage = {},
    isCommentSubmitted,
    error,
    comments = [],
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
      // dispatch(getGangImages()); // No need to refetch all images here
    }
    if (error) {
      dispatch(clearError());
    }
  }, [dispatch, isCommentSubmitted, id, error]);

  useEffect(() => {
    dispatch(getGangImage(id)); // Fetch the specific image details
  }, [dispatch, id]);

  return (
    <div className="w-full h-screen  flex-row items-center justify-center ">
      <div className="w-auto h-2/5 flex items-center justify-center">
        <img src={gangImage?.image} alt="GangImage" className="h-full w-auto" />
      </div>
      
      <div className={`my-5`}>
        <Comments id={id} commentsData={comments} />
      </div>
    </div>
  );
}
