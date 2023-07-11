import React from 'react'
import Item from './Item';
import { useNavigate } from 'react-router-dom';

function DressesW({data,filter}) {
    const navigate= useNavigate();
  return (
    <div className="grid  gap-x-2 md:gap-x-3 gap-y-5  grid-cols-2 md:grid-cols-5 pt-44 md:pt-48 md:px-16 lg:px-36">
   
    {data
      ?.filter((d) => {
        return d.description === filter;
      })
      .map((d, i) => (
        <div key={i} onClick={() => navigate(`/product/${d._id}`)}>
          <Item
            img={`http://localhost:8080/` + d.images[0]}
            img2={`http://localhost:8080/` + d.images[1]}
            img3={`http://localhost:8080/` + d.images[2]}
            img4={`http://localhost:8080/` + d.images[3]}
            name={d.name}
            price={d.price}
          />{" "}
        </div>
      ))}
      </div>
  )
}

export default DressesW
