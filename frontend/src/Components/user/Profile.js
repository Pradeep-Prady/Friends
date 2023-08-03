import React, { useState } from "react";
import img from "../../assets/images/login.jpg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import Loader from "./../layouts/Loader";
import MetaData from './../layouts/MetaData';

export default function Profile() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout);
    navigate("/login");
  };

  const { user, loading } = useSelector((state) => state.authState);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
           <MetaData title={"Profile"} />
          <div className="w-full h-screen overflow-hidden">
            <div className="flex items-center justify-center my-2">
              <div className="w-[100px] h-[100px]  bg-black rounded-md overflow-hidden">
                <img
                  src={user?.avatar ?? img}
                  alt="img"
                  className="w-full h-full"
                />
              </div>
            </div>

            <div className="text-center my-2">
              {user.role === "admin" ? (
                <Link to="/admin/dashboard">
                  <p>{user?.name}</p>
                </Link>
              ) : (
                <p>{user?.name}</p>
              )}

              <p>{user?.email}</p>
            </div>

            <div className="border-t-2 text-center">
              <h2 className="py-2">Posts</h2>
            </div>

            <div className=" bg-black w-full bottom-0 right-0 fixed flex items-start justify-evenly p-3 md:p-5">
              <Link
                to="/profile/update"
                className="text-white flex items-start justify-center"
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </Link>

              <Link
                to="/"
                className="text-black bg-white py-1.5 px-2 rounded-lg flex items-start justify-center"
              >
                {/* <i className="fa-solid fa-plus"></i> */}
                <i className="fa-solid fa-angle-down"></i>
              </Link>

              <button
                onClick={logoutHandler}
                className="text-white flex items-start justify-center"
              >
                <i className="fa-solid fa-arrow-right-from-bracket "></i>
              </button>
            </div>
          </div>{" "}
        </>
      )}
    </>
  );
}
