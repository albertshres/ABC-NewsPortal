import React, { useEffect, useState } from "react";
import Slider from "../../shared/card/Slider";
import { fetchNewsByCategories } from "../../../api";
import NewsSlider from "../../shared/card/NewsSlider";

const FeaturesNews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = () => {
    setLoading(true);
    fetchNewsByCategories("world").then((res) => {
      if (res?.status === 200) {
        setData(res?.data?.data);
        setLoading(false);
      } else {
        alert("something went wrong");
        setLoading(false);
      }
    });
  };

  console.log("@data", data);

  return loading ? <h1>Loading...</h1> : <NewsSlider data={data} />;
};

export default FeaturesNews;
