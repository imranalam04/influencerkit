"use client"
import React from "react";
import Main from "../final/Main";
import Brand from "../final/Brand";
import ThreeCard from "../final/ThreeCard";
import TwoCard from "../final/TwoCard";
import Post from "../final/Post";

const Page = () => {
  return (
    <div className="container">
      <div className="row" style={{ padding: "10% 5%" }}>
      <Main />
      <Brand />
      <hr className="border border-dark my-5" />
      <ThreeCard />
      <TwoCard />
      <Post />
    </div>
    </div>
  );
};

export default Page;
