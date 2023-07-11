import React from "react";
import Item from "../Men/Page2W/Item";
function Grid(props) {
  return (
    <div className="absolute">
      <div className="px-6">
        {!props.input ? (
          <p className="mt-10 font-bold text-xs">YOU MIGHT BE INTERESTED IN</p>
        ) : (
          <p className="mt-4 text-xs">
            {
              props.items.filter((item) => {
                if (!props.input) {
                  return item;
                } else if (
                  item.name.toLowerCase().includes(props.input.toLowerCase())
                ) {
                  return item;
                }
              }).length
            }{" "}
            RESULTS
          </p>
        )}
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-6 gap-3">
        {props.items
          .filter((item) => {
            if (!props.input) {
              return item;
            } else if (
              item.name.toLowerCase().includes(props.input.toLowerCase())
            ) {
              return item;
            }
          })
          .map((item, i) => (
            <Item
              key={item.img}
              img={item.img}
              name={item.name}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
}

export default Grid;
