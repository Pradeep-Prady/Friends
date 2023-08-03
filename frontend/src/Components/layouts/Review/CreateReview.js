import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createReview, getReviews } from "../../../actions/reviewActions";
import { clearError, clearReviewSubmitted } from "../../../slices/reviewSlice";
import { toast } from "react-hot-toast";

export default function CreateReview() {
  const [message, setMessage] = useState("");

  const { isReviewSubmitted, error } = useSelector(
    (state) => state.reviewsState
  );

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("message", message);
    dispatch(createReview(formData));
  };

  useEffect(() => {
    if (isReviewSubmitted) {
      dispatch(clearReviewSubmitted());
      toast.success("Review Posted Successfully", {
        position: "bottom-center",
        duration: 2000,
        style: {
          border: "1px solid white",
          backgroundColor: "black",
          color: "white",
        },
      });
      dispatch(getReviews());
      setMessage("");
    }

    if (error) {
      dispatch(clearError());
      toast.error(error, {
        position: "bottom-center",
        duration: 2000,
        style: {
          border: "1px solid white",
          backgroundColor: "black",
          color: "white",
        },
      });

      return;
    }
  }, [dispatch, error, isReviewSubmitted]);

  return (
    <div className="w-full h-screen bg-stone-900 ">
      <h2 className="text-center text-4xl font-light text-white pt-5">
        Write Review
      </h2>

      <div className="w-full h-full flex items-center justify-center">
        <form className=" py-10 px-5 glass" onSubmit={submitHandler}>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            placeholder="enter review"
            className="outline-none border-0 p-2 h-[100px] w-full bg-stone-950 text-white rounded-md"
          />
          <button
            type="submit"
            className="w-full my-2 py-2 bg-stone-950 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
