// import React from "react";

// const NewsSlider = ({ data }) => {
//   return (
//     <>
//       <div id="carouselExampleCaptions" class="carousel slide">
//         <div class="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="0"
//             class="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//         </div>
//         <div class="carousel-inner">
//           <div class="carousel-item active">
//             <img src="..." class="d-block w-100" alt="..." />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>First slide label</h5>
//               <p>
//                 Some representative placeholder content for the first slide.
//               </p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img src="..." class="d-block w-100" alt="..." />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Second slide label</h5>
//               <p>
//                 Some representative placeholder content for the second slide.
//               </p>
//             </div>
//           </div>
//           <div class="carousel-item">
//             <img src="..." class="d-block w-100" alt="..." />
//             <div class="carousel-caption d-none d-md-block">
//               <h5>Third slide label</h5>
//               <p>
//                 Some representative placeholder content for the third slide.
//               </p>
//             </div>
//           </div>
//         </div>
//         <button
//           class="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="prev"
//         >
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Previous</span>
//         </button>
//         <button
//           class="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="next"
//         >
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="visually-hidden">Next</span>
//         </button>
//       </div>
//     </>
//   );
// };

// export default NewsSlider;

import React from "react";
import { Link } from "react-router-dom";

const NewsSlider = ({ data }) => {
  // Get the first three elements of the array
  const topThreeItems = data.splice(5, 3);

  return (
    <div id="carouselExampleCaptions" className="carousel slide mb-5">
      <div className="carousel-indicators">
        {topThreeItems.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-current={i === 0 ? "true" : "false"}
            aria-label={`Slide ${i + 1}`}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {topThreeItems.map((item, i) => (
          <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
            <Link to={item?.link}>
              <img
                src={item?.image}
                className="d-block w-100"
                alt={item?.title}
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>{item?.title}</h5>
                <p>{item?.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default NewsSlider;
