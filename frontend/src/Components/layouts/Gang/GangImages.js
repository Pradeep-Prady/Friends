import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { getGangImages } from "../../../actions/gangImageActions";
import MetaData from "../MetaData";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import ImageCard from "./ImageCard";

export default function GangImages() {
  const dispatch = useDispatch();

  const { gangImages, loading, error } = useSelector(
    (state) => state.gangImagesState
  );

 
  return (
    <>
      <MetaData title={"Gang Images"} />

      <div className="w-full h-screen">
        <div className="flex-row items-center justify-center z-10">
          {loading ? (
            <Loader />
          ) : (
            <>
              <Swiper loop={true}>
                {gangImages?.map((gangImage, index) => (
                  <SwiperSlide
                    key={gangImage?._id}
                    className="w-full h-screen bg-white"
                  >
                    <ImageCard gangImage={gangImage} index={index} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </div>
      </div>
    </>
  );
}
