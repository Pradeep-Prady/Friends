import React, { useEffect, useState } from "react";
import img from "../../../assets/images/bg1.jpg";
import img1 from "../../../assets/images/bg3.jpg";
import ImageCard from "./ImageCard";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { getGangImages } from "../../../actions/gangImageActions";
import { Link } from "react-router-dom";
import MetaData from "../MetaData";
import Loader from "../Loader";

export default function GangImages() {
  const dispatch = useDispatch();

  const { gangImages, loading, error } = useSelector(
    (state) => state.gangImagesState
  );

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    dispatch(getGangImages());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={"Gang Images"} />

          <div className="w-full h-screen">
            <div className="flex-row items-center justify-center z-10">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <Swiper loop={true}>
                    {gangImages?.map((gangImage) => (
                      <SwiperSlide
                        key={gangImage?._id}
                        className=" w-full h-screen bg-white"
                      >
                        <div>
                          <ImageCard gangImage={gangImage} />
                          {/* <ImageCardDetails
                      id={gangImage._id}
                      gangImageData={gangImage}
                    /> */}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 left-0 z-30 w-full flex items-center justify-center">
              <Link to="/gang/image/upload">
                <button className="bg-stone-950 py-1 px-3 text-white text-sm rounded-md ">
                  Upload Images
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
