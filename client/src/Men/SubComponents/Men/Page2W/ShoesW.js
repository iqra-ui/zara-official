import React from 'react'
import { useNavigate } from 'react-router-dom';
import Item from './Item';

function ShoesW({data, filter}) {
  const navigate = useNavigate();
  return (
    <div className="grid  gap-x-2 md:gap-x-3 gap-y-4  grid-cols-2 md:grid-cols-5 pt-44 md:pt-48 md:px-16 lg:px-36">
   
    {data
      ?.filter((d) => {
        return d.description === filter;
      })
      .map((d, i) => (
        <div key={i} onClick={() => navigate(`/product/${d._id}`)}>
          <Item
            img={`https://zara-hof3.onrender.com/` + d.images[0]}
            img2={`https://zara-hof3.onrender.com/` + d.images[1]}
            img3={`https://zara-hof3.onrender.com/` + d.images[2]}
            img4={`https://zara-hof3.onrender.com/` + d.images[0]}
            name={d.name}
            price={d.price}
          />{" "}
        </div>
      ))}
      </div>
  )
}

export default ShoesW
