import React from "react";
import { Link } from "react-router-dom";

const Cards = (props) => {
  let { className, url, title, image, description, imgHeight, imgWidth } =
    props;
  return (
    <div className={`${className} card border-0`}>
      <Link to={url} className="text-decoration-none">
        <img
          src={image || "https://via.placeholder.com/150"}
          className="card-img-top"
          alt={title}
          style={{
            height: imgHeight ? imgHeight : "200px",
            objectFit: "cover",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
