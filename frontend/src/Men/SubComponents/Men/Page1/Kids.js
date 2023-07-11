import React, { useEffect, useState } from "react";
import video from "./kid2.mp4";
function Kids() {
  const [img0, setImg0] = useState("");
  const [img1, setImg1] = useState("");
  const [img2, setImg2] = useState("");
  const [img3, setImg3] = useState("");
  const [img4, setImg4] = useState("");
  const [img5, setImg5] = useState("");
  const [img6, setImg6] = useState("");
  const [img7, setImg7] = useState("");

  const resizeHandler = () => {
    if (window.innerWidth < 418) {
      setImg0(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-swimwear/subhome-xmedia-13//w/748/IMAGE-portrait-default-fill-02153d90-5a06-41d7-9a40-1dc748645d5a-default_0.jpg?ts=1680099676724"
      );
      setImg1(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-girl/subhome-xmedia-13-02//w/748/IMAGE-portrait-default-fill-52a8f304-1892-428a-85a2-f884e745637f-default_0.jpg?ts=1680258166609"
      );
      setImg2(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-boy/subhome-xmedia-13//w/748/IMAGE-portrait-default-fill-290543ac-e51c-45d6-924b-f708172c52d4-default_0.jpg?ts=1680022994941"
      );
      setImg3(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-babygirl/subhome-xmedia-13//w/748/IMAGE-portrait-default-fill-f72ed22c-0de0-49f4-8444-64d7372b2bc4-default_0.jpg?ts=1680184874321"
      );
      setImg4(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-babyboy/subhome-xmedia-13//w/748/IMAGE-portrait-default-fill-a4b17661-9550-41b1-bb1e-c356e2cd30ee-default_0.jpg?ts=1680020120366"
      );
      setImg5(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-mini/subhome-xmedia-13//w/748/IMAGE-portrait-default-fill-44baf257-870e-42ae-bf43-9255d89e1502-default_0.jpg?ts=1680020456352"
      );
      setImg6(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-shoes-bags/subhome-xmedia-12//w/748/IMAGE-portrait-default-fill-64d1af26-f7dd-4424-9d2c-506a0008d26f-default_0.jpg?ts=1679567277101"
      );
      setImg7(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-join-life/subhome-xmedia-11//w/748/IMAGE-portrait-vertical-2-default-fill-ab895189-1748-4143-84cb-9c3882a61180-default_0.jpg?ts=1679059907090"
      );
    } else if (window.innerWidth > 417 && window.innerWidth < 810) {
      setImg0(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-swimwear/subhome-xmedia-13//w/982/IMAGE-portrait-ipad-default-fill-31b34e3a-0c31-4a3b-a681-72ce8d5db4c4-default_0.jpg?ts=1680099671852"
      );
      setImg1(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-girl/subhome-xmedia-13-02//w/1278/IMAGE-portrait-ipad-default-fill-c2017067-c9bc-4cb8-abb5-b300d85ba00d-default_0.jpg?ts=1680258163427"
      );
      setImg2(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-boy/subhome-xmedia-13//w/1185/IMAGE-portrait-ipad-default-fill-fb248a15-b496-40e2-abcf-aef3188be761-default_0.jpg?ts=1680022993134"
      );
      setImg3(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-babygirl/subhome-xmedia-13//w/1185/IMAGE-portrait-ipad-default-fill-11e11839-8a17-44df-a101-3cf1d4fc3424-default_0.jpg?ts=1680184872280"
      );
      setImg4(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-babyboy/subhome-xmedia-13//w/1185/IMAGE-portrait-ipad-default-fill-50e234d6-7cc9-4ee1-883e-dbc5e9237b63-default_0.jpg?ts=1680020119076"
      );
      setImg5(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-mini/subhome-xmedia-13//w/1185/IMAGE-portrait-ipad-default-fill-fd4e52fd-afdd-44d6-b054-0f80c91a09c2-default_0.jpg?ts=1680020453195"
      );
      setImg6(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-shoes-bags/subhome-xmedia-12//w/1185/IMAGE-portrait-ipad-default-fill-ec4e2fa0-4f3d-4b0a-acd7-ff0f246c3552-default_0.jpg?ts=1679567273946"
      );
      setImg7(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-join-life/subhome-xmedia-11//w/1185/IMAGE-portrait-ipad-default-fill-7ffc07fc-2389-4119-b4ca-d594279af130-default_0.jpg?ts=1679059905885"
      );
    } else {
      setImg1(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-girl/subhome-xmedia-13-02//w/1920/IMAGE-landscape-default-fill-db28e492-0ecc-47d4-be77-caa7b6524b6c-default_0.jpg?ts=1680258162811"
      );
      setImg2(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-babyboy/subhome-xmedia-23-2//w/1025/IMAGE-landscape-default-fill-27582242-a0f1-471c-b4db-368c1e796bd6-default_0.jpg?ts=1685981857746"
      );
      setImg3(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-babygirl/subhome-xmedia-13//w/1920/IMAGE-landscape-default-fill-efa0b6a1-51d3-4993-bdaf-dbd7f2dbc30d-default_0.jpg?ts=1680184870855"
      );
      setImg4(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-babyboy/subhome-xmedia-13//w/1920/IMAGE-landscape-default-fill-e15a8fab-a9fa-4f26-ab62-9b687cc164fb-default_0.jpg?ts=1680020119939"
      );
      setImg5(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-mini/subhome-xmedia-13//w/1920/IMAGE-landscape-default-fill-148d7fa2-99d8-445b-95b0-610b2808c96e-default_0.jpg?ts=1680020452598"
      );
      setImg6(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-shoes-bags/subhome-xmedia-12//w/1920/IMAGE-landscape-default-fill-8c6abfe7-8032-4066-8ea1-0b31338a438c-default_0.jpg?ts=1679567270157"
      );
      setImg7(
        "https://static.zara.net/photos///contents/mkt/spots/ss23-north-kids-join-life/subhome-xmedia-11//w/2560/IMAGE-landscape-default-fill-bba2e1b6-f02b-4e3b-83e7-0be62c296503-default_0.jpg?ts=1679059903730"
      );
    }
  };

  window.addEventListener("resize", resizeHandler);
  useEffect(() => {
    resizeHandler();
  }, []);

  return (
    <div className="snap-always snap-y snap-mandatory h-screen w-screen overflow-scroll">
      <video
        muted
        autoPlay
        loop
        src={video}
        className="hidden md:block snap-always snap-start sticky top-0 h-full w-full object-cover"
      ></video>
      <img
        src={img0}
        alt=""
        className="block md:hidden snap-always snap-start sticky top-0 h-full w-full object-cover"
      />
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
      <img
        src={img6}
        alt=""
        className="snap-always snap-start sticky top-0 h-full w-full object-cover"
      />
      <img
        src={img7}
        alt=""
        className="snap-always snap-start sticky top-0 h-full w-full object-cover"
      />
    </div>
  );
}

export default Kids;
