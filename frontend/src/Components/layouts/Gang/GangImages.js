import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { useDispatch, useSelector } from "react-redux";
import { getGangImages } from "../../../actions/gangImageActions";
import MetaData from "../MetaData";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import ImageCard from "./ImageCard";
import 'swiper/css/effect-fade';

import { Controller } from "swiper/modules";
import { Pagination, Navigation, History,EffectCoverflow } from "swiper/modules";
import "swiper/css/navigation";
import 'swiper/css/effect-coverflow';


export default function GangImages() {
  const dispatch = useDispatch();

  const [firstSwiper, setFirstSwiper] = useState(0);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const { gangImages, loading, error } = useSelector(
    (state) => state.gangImagesState
  );
  const handleSlide = (i) => {
    setFirstSwiper(i);
  };

  return (
    <>
      <MetaData title={"Gang Images"} />

      <div className="w-full h-screen">
        <div className="flex-row items-center justify-center  z-10">
          {loading ? (
            <Loader />
          ) : (
            <>
              <Swiper
                loop={true}
                initialSlide={firstSwiper}
                direction={"horizontal"}
                // effect={'coverflow'}

                pagination={{
                  type: "progressbar",
                }}
                history={{
                  key: "images",
                }}
                zoom={true}
                navigation={true}
                modules={[Pagination, Navigation, History,EffectCoverflow]}
                className="mySwiper "
              >
                {gangImages?.map((gangImage, index) => (
                  <SwiperSlide
                    data-history={index}
                    key={gangImage?._id}
                    className="w-full h-screen z-10 "
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
