import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

import "bootstrap-icons/font/bootstrap-icons.css"; // Import Bootstrap Icons
import "./slider.css"; // Import the CSS file for custom animations

const Slider = (props) => {
  let { data } = props;
  const [activeSetIndex, setActiveSetIndex] = useState(0);
  const [direction, setDirection] = useState(null); // For animation direction

  const cardSets = [data?.slice(0, 5)];

  // const cardSets = [
  //   [
  //     { id: 1, image: "https://via.placeholder.com/300", title: "Card 1" },
  //     { id: 2, image: "https://via.placeholder.com/300", title: "Card 2" },
  //     { id: 3, image: "https://via.placeholder.com/300", title: "Card 3" },
  //     { id: 4, image: "https://via.placeholder.com/300", title: "Card 4" },
  //   ],
  //   [
  //     { id: 5, image: "https://via.placeholder.com/300", title: "Card 5" },
  //     { id: 6, image: "https://via.placeholder.com/300", title: "Card 6" },
  //     { id: 7, image: "https://via.placeholder.com/300", title: "Card 7" },
  //     { id: 8, image: "https://via.placeholder.com/300", title: "Card 8" },
  //   ],
  //   [
  //     { id: 9, image: "https://via.placeholder.com/300", title: "Card 9" },
  //     { id: 10, image: "https://via.placeholder.com/300", title: "Card 10" },
  //     { id: 11, image: "https://via.placeholder.com/300", title: "Card 11" },
  //     { id: 12, image: "https://via.placeholder.com/300", title: "Card 12" },
  //   ],
  // ];

  const handleSelect = (newDirection) => {
    setDirection(newDirection);
    setTimeout(() => {
      setActiveSetIndex((prevIndex) =>
        newDirection === "next"
          ? prevIndex === cardSets?.length - 1
            ? 0
            : prevIndex + 1
          : prevIndex === 0
          ? cardSets?.length - 1
          : prevIndex - 1
      );
      setDirection(null); // Reset the direction after the transition
    }, 500); // Match the animation duration
  };

  return (
    <div className="container my-4">
      {/* Carousel */}
      <Carousel indicators={false} controls={false} interval={null}>
        <Carousel.Item>
          <div
            className={`row ${
              direction === "next"
                ? "slide-next"
                : direction === "prev"
                ? "slide-prev"
                : ""
            }`}>
            {cardSets[activeSetIndex]?.map((card) => (
              <div className="col-lg-3 col-md-6 mb-4" key={card.id}>
                <div className="card h-100">
                  <img
                    src={card.image}
                    className="card-img-top"
                    alt={card.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-center">{card.title}</h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Carousel.Item>
      </Carousel>

      {/* Carousel Controls */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <button
          className="btn btn-primary"
          onClick={() => handleSelect("prev")}>
          <i className="bi bi-arrow-left"></i>{" "}
          {/* Bootstrap icon for previous */}
        </button>
        <div className="dots-container">
          {cardSets.map((_, index) => (
            <span
              key={index}
              className={`dot ${
                activeSetIndex === index ? "dot-active" : ""
              }`}></span>
          ))}
        </div>
        <button
          className="btn btn-primary"
          onClick={() => handleSelect("next")}>
          <i className="bi bi-arrow-right"></i> {/* Bootstrap icon for next */}
        </button>
      </div>
    </div>
  );
};

export default Slider;
