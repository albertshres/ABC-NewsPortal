import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchNewsByCategories } from "../../api";
import Cards from "../shared/card/Cards";
import "../custom.css";

const Categories = (props) => {
  let { category } = props;
  const location = useLocation();
  const currentCategory = location.pathname.substring(1) || category;

  const categories = [
    "general",
    "business",
    "entertainment",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (categories.includes(currentCategory)) {
      fetch();
    }
  }, [currentCategory]);

  const fetch = () => {
    setLoading(true);
    fetchNewsByCategories(currentCategory).then((res) => {
      if (res.status === 200) {
        setData(res?.data?.data);
        setLoading(false);
      } else {
        alert("something went wrong");
        setLoading(false);
      }
    });
  };

  return (
    <div className="container my-4">
      {/* <h3 className="mb-5 text-center text-capitalize">{currentCategory}</h3> */}
      <div className="row m-0 p-0">
        {loading ? (
          <h1>Loading...</h1>
        ) : data?.length > 0 ? (
          data?.splice(0, 4).map((o, i) => {
            return (
              <div className="col-sm-12 p-0 m-0 col-md-6 col-lg-6" key={i}>
                <Cards
                  imgHeight="100px"
                  url={o?.link}
                  title={
                    o?.title.slice(0, 60) + (o?.title?.length > 60 && "...")
                  }
                  description={
                    o?.description.slice(0, 80) +
                    (o?.description?.length > 80 && "...")
                  }
                  image={o?.image}
                />
              </div>
            );
          })
        ) : (
          <h1>No News available</h1>
        )}
      </div>
    </div>
  );
};

export default Categories;
