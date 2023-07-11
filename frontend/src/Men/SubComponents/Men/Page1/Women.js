import React, { useEffect, useState } from "react";

function Women() {
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");

  const resizeHandler = () => {
    if (window.innerWidth < 418) {
      setImg1("./images/womenC/small_1.jpg");
      setImg2("./images/womenC/small_2.jpg");
      setImg3("./images/womenC/small_4.jpg");
      setImg4("./images/womenC/small_7.jpg");
      setImg5("./images/womenC/small_6.jpg");
    } else if (window.innerWidth > 417 && window.innerWidth < 810) {
      setImg1("./images/womenC/medium_1.jpg" );
      setImg2("./images/womenC/medium_2.jpg");
      setImg3("./images/womenC/medium_4.jpg");
      setImg4("./images/womenC/medium_7.jpg");
      setImg5("./images/womenC/medium_6.jpg");
    } else {
      setImg1("./images/womenC/large_1.jpg");
      setImg2("./images/womenC/large_2.jpg");
      setImg3("./images/womenC/large_4.jpg");
      setImg4("./images/womenC/large_7.jpg");
      setImg5("./images/womenC/large_6.jpg");
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

export default Women;
