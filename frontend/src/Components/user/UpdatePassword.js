import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  clearAuthError,
  updatePassword as updatePasswordAction,
} from "../../actions/userActions";
import { Link } from "react-router-dom";
import MetaData from "../layouts/MetaData";
import { toast } from "react-hot-toast";

export default function UpdatePassword() {
  const [password, setPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const dispatch = useDispatch();
  const { isUpdated, error, loading } = useSelector((state) => state.authState);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("oldPassword", oldPassword);
    formData.append("password", password);
    dispatch(updatePasswordAction(formData));
  };

  useEffect(() => {
    if (isUpdated) {
      toast.success("Secret Code Changed", {
        position: "bottom-center",
        duration: 2000,
        style: {
          border: "1px solid white",
          backgroundColor: "black",
          color: "white",
        },
      });
      setOldPassword("");
      setPassword("");
      return;
    }
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
      dispatch(clearAuthError);

      return;
    }
  }, [error, isUpdated, dispatch]);

  return (
    <>
      <MetaData title={"Update Password"} />{" "}
      <div
        className="relative z-10 w-full h-screen flex items-center justify-center text-white login"
        id="login"
      >
        <div className="w-11/12 sm:w-2/5 md:w-1/5 rounded-md  form-glass py-7 px-5">
          <form className="text-center" onSubmit={submitHandler}>
            <h2 className="text-3xl">Login</h2>

            <div className="my-5 flex-row">
              <div className="flex my-2">
                <label>Old Password *</label>
              </div>
              <div className="flex ">
                <input
                  className="w-full outline-0  rounded-sm bg-transparent border-b-2"
                  type="password"
                  name="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="my-5 flex-row">
              <div className="flex my-2">
                <label>Password *</label>
              </div>
              <div className="flex ">
                <input
                  className="w-full outline-0  rounded-sm bg-transparent border-b-2"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="my-5">
              <button
                type="submit"
                disabled={loading}
                className="button-54 scale-75"
              >
                Update
              </button>
            </div>
          </form>
        </div>
        <div className=" bg-black w-full bottom-0 right-0 fixed flex items-start justify-evenly p-3 ">
          <Link
            to="/profile/update"
            className="text-white flex items-start justify-center"
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </Link>

          <Link
            to="/profile/update"
            className="text-black bg-white py-1.5 px-2 rounded-lg flex items-start justify-center"
          >
            {/* <i className="fa-solid fa-plus"></i> */}
            <i className="fa-solid fa-angle-down"></i>
          </Link>

          <button
            //   onClick={logoutHandler}
            className="text-white flex items-start justify-center"
          >
            <i className="fa-solid fa-arrow-right-from-bracket "></i>
          </button>
        </div>
      </div>
    </>
  );
}
