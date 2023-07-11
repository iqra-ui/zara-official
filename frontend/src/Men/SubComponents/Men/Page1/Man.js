// import React from "react";

// const Man = ({ data }) => {
//   return (
//     <div>
//       <div className="  snap-y snap-proximity h-screen w-screen overflow-scroll relative scroll-none text-black">
//         {data
//           .filter?.((d) => {
//             return d.name === "MEN";
//           })
//           .map((d, i) => (
//             <div
//               key={i}
//               className="h-full w-full snap-always snap-start sticky top-0"
//             >
//               <img
//                 src={process.env.MONGO_URL + d.images[0]}
//                 className="h-full w-full object-cover hidden lg:block"
//               />
//               <img
//                 src={process.env.MONGO_URL + d.images[5]}
//                 className="h-full w-full object-cover hidden md:block lg:hidden"
//               />
//               <img
//                 src={process.env.MONGO_URL + d.images[10]}
//                 className="h-full w-full object-cover block md:hidden lg:hidden"
//               />
//             </div>
//           ))}
//         <video
//           autoPlay
//           muted
//           loop
//           className="snap-always snap-start sticky top-0 h-full w-full object-cover"
//           src={"./images/menC/man.mp4"}
//         ></video>
//         {data
//           .filter?.((d) => {
//             return d.name === "MEN";
//           })
//           .map((d, i) => (
//             <div
//               key={i}
//               className="h-full w-full snap-always snap-start sticky top-0"
//             >
//               <img
//                 src={process.env.MONGO_URL + d.images[1]}
//                 className="h-full w-full object-cover hidden lg:block"
//               />
//               <img
//                 src={process.env.MONGO_URL + d.images[6]}
//                 className="h-full w-full object-cover hidden md:block lg:hidden"
//               />
//               <img
//                 src={process.env.MONGO_URL + d.images[11]}
//                 className="h-full w-full object-cover block md:hidden lg:hidden"
//               />
//             </div>
//           ))}
//         {data
//           .filter?.((d) => {
//             return d.name === "MEN";
//           })
//           .map((d, i) => (
//             <div
//               key={i}
//               className="h-full w-full snap-always snap-start sticky top-0"
//             >
//               <img
//                 src={process.env.MONGO_URL + d.images[2]}
//                 className="h-full w-full object-cover hidden lg:block"
//               />
//               <img
//                 src={process.env.MONGO_URL + d.images[7]}
//                 className="h-full w-full object-cover hidden md:block lg:hidden"
//               />
//               <img
//                 src={process.env.MONGO_URL + d.images[12]}
//                 className="h-full w-full object-cover block md:hidden lg:hidden"
//               />
//             </div>
//           ))}
//         {data
//           .filter?.((d) => {
//             return d.name === "MEN";
//           })
//           .map((d, i) => (
//             <div
//               key={i}
//               className="h-full w-full snap-always snap-start sticky top-0"
//             >
//               <img
//                 src={process.env.MONGO_URL + d.images[3]}
//                 className="h-full w-full object-cover hidden lg:block"
//               />
//               <img
//                 src={process.env.MONGO_URL + d.images[8]}
//                 className="h-full w-full object-cover hidden md:block lg:hidden"
//               />
//               <img
//                 src={process.env.MONGO_URL + d.images[13]}
//                 className="h-full w-full object-cover block md:hidden lg:hidden"
//               />
//             </div>
//           ))}
//         {data
//           .filter?.((d) => {
//             return d.name === "MEN";
//           })
//           .map((d, i) => (
//             <div
//               key={i}
//               className="h-full w-full snap-always snap-start sticky top-0"
//             >
//               <img
//                 src={process.env.MONGO_URL + d.images[4]}
//                 className="h-full w-full object-cover hidden lg:block"
//               />
//               <img
//                 src={process.env.MONGO_URL + d.images[9]}
//                 className="h-full w-full object-cover hidden md:block lg:hidden"
//               />
//               <img
//                 src={process.env.MONGO_URL + d.images[14]}
//                 className="h-full w-full object-cover block md:hidden lg:hidden"
//               />
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default Man;

import React, { useEffect, useState } from "react";
import video from "./man.mp4";
import video2 from "./man2.mp4";
function Man() {
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  const [img6, setImg6] = useState("");

  const resizeHandler = () => {
    if (window.innerWidth < 418) {
      setImg1("./images/menC/small_1.jpg");
      setImg2("./images/menC/small_2.jpg");
      setImg3("./images/menC/small_3.jpg");
      setImg4("./images/menC/small_4.jpg");
      setImg5("./images/menC/small_5.jpg");
    } else if (window.innerWidth > 417 && window.innerWidth < 810) {
      setImg1("./images/menC/medium_1.jpg" );
      setImg2("./images/menC/medium_2.jpg");
      setImg3("./images/menC/medium_3.jpg");
      setImg4("./images/menC/medium_4.jpg");
      setImg5("./images/menC/medium_5.jpg");
    } else {
      setImg1("./images/menC/large_1.jpg");
      setImg2("./images/menC/large_2.jpg");
      setImg3("./images/menC/large_3.jpg");
      setImg4("./images/menC/large_4.jpg");
      setImg5("./images/menC/large_5.jpg");
    }
  };

  window.addEventListener("resize", resizeHandler);
  useEffect(() => {
    resizeHandler();
  }, []);

  return (
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll">
      <img
        src={img1}
        alt=""
        className="snap-always snap-start sticky top-0 h-full w-full object-cover"
      />
      <video
        autoPlay
        muted
        loop
        className="hidden md:block snap-always snap-start sticky top-0 h-full w-full object-cover"
        src={video}
      ></video>
      <video
        autoPlay
        muted
        loop
        className=" md:hidden snap-always snap-start sticky top-0 h-full w-full object-cover"
        src={video2}
      ></video>
      <img
        src={img2}
        alt=""
        className="snap-always snap-start sticky top-0 h-full w-full object-cover"
      />
      <img
        src={img3}
        alt=""
        className="snap-always snap-start sticky top-0 h-full w-full object-cover"
      />
      <img
        src={img4}
        alt=""
        className="snap-always snap-start sticky top-0 h-full w-full object-cover"
      />
      <img
        src={img5}
        alt=""
        className="snap-always snap-start sticky top-0 h-full w-full object-cover"
      />
      
    </div>
  );
}

export default Man;
