import React from "react";
import { Link } from "react-router-dom";

export default function ImageCard({ gangImage, index, setSelectedImageIndex }) {
  return (
    <div className="relative w-full h-screen flex items-center justify-center rounded-md z-10">
      <div className="w-full h-4/5 overflow-hidden sm:w-10/12 md:w-8/12 flex items-center justify-center ">
        <Link
          to={`/gang/image/${gangImage?._id}`}
          className="flex items-center justify-center"
        >
          <img
            className="w-auto h-auto rounded-xl sm:w-3/5 md:w-2/5 p-2"
            key={gangImage?._id}
            src={gangImage?.image}
            alt="GangImages"
          />
        </Link>
      </div>
    </div>
  );
}
