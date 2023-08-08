import React, { useEffect } from "react";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Gang from "./layouts/Gang";
import Reviews from "./layouts/Review/Reviews";
import CreateReview from "./layouts/Review/CreateReview";
import GroupChat from "./layouts/GroupChat";
import Footer from "./layouts/Footer";
import MetaData from "./layouts/MetaData";
import TicTacToe from "./layouts/Game/TicTacToe";
import { getGangImages } from "../actions/gangImageActions";
import { useDispatch } from "react-redux";
import Loader from "./layouts/Loader";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGangImages());
  }, [dispatch]);

  return (
    <>
      <MetaData title={"Home"} />

      <Navbar />
      <Header />  

      <Gang />
      
      <GroupChat />
      <CreateReview />
      <Reviews />
      <TicTacToe />
      <Footer />
    </>
  );
}
