import React from 'react'
import { useNavigate } from 'react-router-dom';
import Item from '../Men/Page2W/Item';

function CargoDress({data,filter}) {
    const navigate= useNavigate();
  return (
    <div  className="grid mx-auto gap-x-2 md:gap-x-3 gap-y-5  grid-cols-2 md:grid-cols-4 pt-44 md:pt-48 md:px-16 lg:px-36">
   
    {data
      ?.filter((d) => {
        return d.description === filter;
      })
      .map((d, i) => (
        <div key={i} onClick={() => navigate(`/productM/${d._id}`)}
        >
          <Item
            img={`https://zara-hof3.onrender.com/` + d.images[3]}
            img2={`https://zara-hof3.onrender.com/` + d.images[1]}
            img3={`https://zara-hof3.onrender.com/` + d.images[2]}
            img4={`https://zara-hof3.onrender.com/` + d.images[0]}
            name={d.name}
            price={d.price}
          />
        </div>
      ))}
      </div>
  )
}

export default CargoDress
