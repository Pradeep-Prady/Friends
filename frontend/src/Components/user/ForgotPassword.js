import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearAuthError, forgotPassword } from "../../actions/userActions";
import MetaData from "../layouts/MetaData";
import { toast } from "react-hot-toast";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const { error, message, loading } = useSelector((state) => state.authState);

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    dispatch(forgotPassword(formData));
  };

  useEffect(() => {
    if (message) {
      toast.success(message, {
        position: "bottom-center",
        duration: 2000,
        style: {
          border: "1px solid white",
          backgroundColor: "black",
          color: "white",
        },
      });
      setEmail("");
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
  }, [error, message, dispatch]);

  return (
    <> 
    <MetaData title={'Forgot Password'} />
    <div
      className="w-full h-screen flex items-center justify-center text-white login"
      id="login"
    >
      <div className="w-11/12 sm:w-2/5 md:w-1/5 rounded-md  form-glass py-7 px-5">
        <form onSubmit={submitHandler} className="text-center">
          <h2 className="text-2xl">Forgot Password</h2>

          <div className="my-5 flex-row">
            <div className="flex my-2">
              <label>Email Address *</label>
            </div>
            <div className="flex ">
              <input
                className="w-full outline-0  rounded-sm bg-transparent border-b-2"
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="my-5">
            <button className="button-54 scale-75">Forgot</button>
          </div>

          <div>
            <Link to="/login">
              <p className="">i remember my password? / login?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
   
  );
}
