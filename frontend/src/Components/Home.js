import React from "react";
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Gang from "./layouts/Gang";
import Reviews from "./layouts/Review/Reviews";
import CreateReview from "./layouts/Review/CreateReview";
import GroupChat from "./layouts/GroupChat";
import Footer from "./layouts/Footer";
import MetaData from "./layouts/MetaData";

export default function Home() {
  return (
    <>
      <MetaData title={"Home"} />

      <Navbar />
      <Header />
      <Gang />
      <GroupChat />
      <CreateReview />
      <Reviews />
      <Footer />
    </>
  );
}
