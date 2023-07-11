import React from "react";
import Item from "./Item";
import { Link, Outlet } from "react-router-dom";

function View() {
  // const products= useProduct();
  return (
    <div>
      <div className="grid  gap-x-2 md:gap-x-3 gap-y-4  grid-cols-2 md:grid-cols-4 pt-36 md:pt-48 md:px-16 lg:px-36">
      {/* {products?.map((p, i) => ( */}
        <Link to="/details">
        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/0761/469/630/2/w/239/0761469630_1_1_1.jpg?ts=1680104247310"
          img2="https://static.zara.net/photos///2023/V/0/2/p/0761/469/630/2/w/896/0761469630_2_1_1.jpg?ts=1680104247528"
          img3="https://static.zara.net/photos///2023/V/0/2/p/0761/469/630/2/w/790/0761469630_2_2_1.jpg?ts=1680104248679"
          name="HOODIE WITH RIPS"
          price="45.95"
        />
        </Link>

        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/3166/417/620/2/w/239/3166417620_1_1_1.jpg?ts=1680101295687"
          name="TIE-DYE CROCHET SWEATER"
          price="39.95"
        />

        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/6917/459/630/2/w/239/6917459630_1_1_1.jpg?ts=1680075170199"
          name="PARACHUTE CARGO TROUSERS"
          price="49.95"
        />

        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/2888/444/615/2/w/239/2888444615_1_1_1.jpg?ts=1680075167503"
          name="OVERSIZE HEAVY WEIGHT T-SHIRT"
          price="22.95"
        />
      </div>
      <div className="grid gap-x-2 md:gap-x-3 gap-y-4 grid-cols-2 md:grid-cols-4 py-3 md:py-20 md:px-28 lg:px-56">
        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/2888/444/615/2/w/191/2888444615_6_1_1.jpg?ts=1678894595402"
          name="OVERSIZE HEAVY WEIGHT T-SHIRT"
          price="22.95"
        />

        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/5072/430/427/2/w/191/5072430427_6_1_1.jpg?ts=1679925643762"
          name="RIPPED DENIM OVERSHIRT"
          price="45.95"
        />

        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/3166/417/620/2/w/191/3166417620_6_1_1.jpg?ts=1680090381837"
          name="TIE-DYE CROCHET SWEATER"
          price="39.95"
        />

        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/6917/459/630/2/w/191/6917459630_6_1_1.jpg?ts=1680082292154"
          name="PARACHUTE CARGO TROUSERS"
          price="49.95"
        />

        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/0761/469/630/2/w/191/0761469630_6_1_1.jpg?ts=1680082293474"
          name="HOODIE WITH RIPS"
          price="49.95"
        />

        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/5072/430/406/2/w/191/5072430406_6_1_1.jpg?ts=1679925642199"
          name="RIPPED DENIM OVERSHIRT"
          price="45.95"
        />

        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/4635/945/044/2/w/191/4635945044_6_1_1.jpg?ts=1680082293919"
          name="PRINTED STRIPED SHIRT"
          price="39.95"
        />

        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/6688/422/400/2/w/191/6688422400_6_1_1.jpg?ts=1679927312489"
          name="BAGGY FIT JEANS"
          price="45.95"
        />
      </div>
      <div className="grid gap-x-2  md:gap-x-3  gap-y-4 grid-cols-2 md:grid-cols-4 md:px-16 lg:px-36">
        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/7140/416/330/2/w/478/7140416330_1_1_1.jpg?ts=1680101300391"
          name="TEXTURED TWISTED KNIT SWEATER"
          price="45.95"
        />

        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/6186/410/400/2/w/478/6186410400_1_1_1.jpg?ts=1680101322089"
          name="PLEATED CARGO TROUSERS"
          price="49.95"
        />

        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/7140/418/330/2/w/478/7140418330_1_1_1.jpg?ts=1680082107786"
          name="TWISTED KNIT POLO SHIRT"
          price="39.95"
        />

        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/1538/426/406/2/w/478/1538426406_1_1_1.jpg?ts=1680101292911"
          name="CROPPED DENIM JACKET"
          price="45.95"
        />
      </div>
      <div className="grid gap-x-2  md:gap-x-3 gap-y-4 grid-cols-2 md:grid-cols-4  py-3 md:py-20 md:px-28 lg:px-56">
        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/7140/418/330/2/w/382/7140418330_6_1_1.jpg?ts=1679929788853"
          name="TWISTED KNIT POLO SHIRT"
          price="39.95"
        />

        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/1538/426/406/2/w/382/1538426406_6_1_1.jpg?ts=1679917970441"
          name="CROPPED DENIM JACKET"
          price="45.95"
        />

        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/7140/416/330/2/w/382/7140416330_6_1_1.jpg?ts=1679931164358"
          name="TTEXTURED TWISTED KNIT SWEATER"
          price="45.95"
        />

        <Item
          img="https://static.zara.net/photos///2023/V/0/2/p/7140/417/330/2/w/382/7140417330_6_1_1.jpg?ts=1679927535464"
          name="TWISTED KNIT BERMUDA SHORTS"
          price="39.95"
        />
      </div>
      <Outlet/>
    </div>
  );
}

export default View;
