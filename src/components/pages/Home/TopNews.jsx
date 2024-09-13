// import React, { useState, useEffect } from "react";
// import Cards from "../../shared/card/Cards";
// import { fetchNewsByCategories } from "../../../api";

// const TopNews = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     fetch();
//   }, []);

//   const fetch = () => {
//     setLoading(true);
//     fetchNewsByCategories("world").then((res) => {
//       if (res?.status === 200) {
//         setData(res?.data?.data);
//         setLoading(false);
//       } else {
//         alert("something went wrong");
//         setLoading(false);
//       }
//     });
//   };

//   return loading ? (
//     <h1>Loading...</h1>
//   ) : (
//     <div className="row p-0 m-0">
//       <div className="col-8 p-4 col-md-8 text-center">
//         <div className="row">
//           <Cards
//             className="col-12 mb-3 border-0"
//             imgHeight="200px"
//             url={data[0]?.link}
//             title={data[0]?.title}
//             description={data[0]?.description}
//             image={data[0]?.image}
//           />
//           <div className="col-12 m-0 p-0 mb-1">
//             <div className="row m-0 p-0">
//               {data.splice(1, 2).map((o, i) => {
//                 return (
//                   <div
//                     className="col-12 col-lg-6 p-0 m-0 col-md-6 col-lg-6"
//                     key={i}
//                   >
//                     <Cards
//                       imgHeight="100px"
//                       url={o?.link}
//                       title={
//                         o?.title.slice(0, 60) + (o?.title?.length > 60 && "...")
//                       }
//                       description={
//                         o?.description.slice(0, 80) +
//                         (o?.description?.length > 80 && "...")
//                       }
//                       image={o?.image}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/*
//   //with nore display flex and flex wrap method i.e alternative methods
//   <div className="col-8 p-4 text-center">
//     <Cards
//       className="mb-3"
//       imgHeight="200px"
//       url={data[0]?.link}
//       title={data[0]?.title}
//       description={data[0]?.description}
//       image={data[0]?.image}
//     />
//     <div className="d-flex align-items-center">
//       {data.splice(0, 2).map((o, i) => {
//         return (
//           <div className="" key={i}>
//             <Cards
//               imgHeight="100px"
//               url={o?.link}
//               title={o?.title}
//               description={o?.description}
//               image={o?.image}
//             />
//           </div>
//         );
//       })}
//     </div>
//   </div> */}
//       <div className="col-6 p-4 col-md-4 ">
//         {data.splice(1, 2).map((o, i) => {
//           return (
//             <div className="mb-3 m-0 p-0 " key={i}>
//               <Cards
//                 imgHeight="100px"
//                 url={o?.link}
//                 title={o?.title}
//                 description={o?.description}
//                 image={o?.image}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default TopNews;

import React, { useState, useEffect } from "react";
import Cards from "../../shared/card/Cards";
import { fetchNewsByCategories } from "../../../api";

const TopNews = () => {
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

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="container">
      <div className="row justify-content-between">
        {/* Main content area */}
        <div className="col-12 col-lg-8 mb-4">
          <div className="mb-4">
            <Cards
              className="w-100 mb-3 border-0"
              imgHeight="200px"
              url={data[0]?.link}
              title={data[0]?.title}
              description={data[0]?.description}
              image={data[0]?.image}
            />
          </div>
          <div className="row">
            {data.slice(1, 3).map((o, i) => (
              <div className="col-12 col-md-6 mb-3" key={i}>
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
            ))}
          </div>
        </div>

        {/* Additional content area */}
        <div className="col-12 col-md-8 col-lg-4">
          <div className="p-4">
            {data.slice(3, 5).map((o, i) => (
              <div className="mb-3 m-0 p-0" key={i}>
                <Cards
                  imgHeight="100px"
                  url={o?.link}
                  title={o?.title}
                  description={o?.description}
                  image={o?.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNews;
