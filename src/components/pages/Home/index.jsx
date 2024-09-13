import React, { useState, useEffect } from "react";
import TopNews from "./TopNews";
import FeaturesNews from "./FeatureNews";
import { Footer } from "../../shared";

const Home = () => {
  return (
    <div
      className="container my-4"
      style={{ minHeight: "100vh", paddingBottom: "2rem" }}
    >
      <TopNews />
      <FeaturesNews />
    </div>
  );
};

export default Home;
