import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useDispatch, useSelector } from "react-redux";
import { getGangImages } from "../../actions/gangImageActions";
import ImageCard from "../layouts/Gang/ImageCard";
import AdminBar from "./AdminBar";
import MetaData from "./../layouts/MetaData";
import { toast } from "react-hot-toast";
import Loader from "../layouts/Loader";

export default function AdminGangImages() {
  const dispatch = useDispatch();

  const { gangImages, loading, error } = useSelector(
    (state) => state.gangImagesState
  );

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "bottom-center",
        duration: 2000,
        style: {
          border: "1px solid white",
          backgroundColor: "black",
          color: "white",
        },
      });
    }
    dispatch(getGangImages());
  }, [dispatch, error]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {" "}
          <MetaData title={"Gang Images"} />
          <div className="w-full h-auto  ">
            <div className="w-full h-auto flex justify-between items-center bg-stone-950 p-4   text-white">
              <div>
                <Link to="/admin/gang/upload">
                  {" "}
                  <button className="py-1 px-2 bg-stone-800 rounded-sm">
                    Upload Image
                  </button>
                </Link>
              </div>
              <p>Images Count 83</p>
            </div>
            <div>
              {/* <div className="flex justify-evenly items-center mt-3">
          <button className="bg-stone-950 text-white text-sm py-2 px-4 rounded-md">
            User Uploads
          </button>
          <button className="bg-stone-950 text-white text-sm py-2 px-4 rounded-md">
            Gang images
          </button>
        </div> */}
              <div className="w-full h-auto bg-black">
                <div className="gallery">
                  {gangImages && gangImages?.length > 0 ? (
                    gangImages.map((image) => (
                      <>
                        <div className="pics" key={image._id}>
                          <img
                            key={image._id}
                            src={image.image}
                            alt="gangimages"
                          />
                        </div>
                      </>
                    ))
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>

            <AdminBar />
          </div>
        </>
      )}
    </>
  );
}
