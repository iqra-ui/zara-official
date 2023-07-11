import React from 'react'
import { useNavigate } from 'react-router-dom';
import Item from '../Men/Page2W/Item';
function Girl({data, filter}) {
  const navigate=useNavigate();
  return (

    <div>

<div class="flex mx-auto  pt-44 md:pt-48 md:px-16 lg:px-36 cursor-pointer">
        <div class="shrink  mx-auto " xs={12} md={12}>
          <img src="../../images/kids/kidsDresses/flower.jpg" />
        </div>
      </div>







   
    <div  className="grid  gap-x-2 md:gap-x-3 gap-y-5  grid-cols-2 md:grid-cols-5 pt-44 md:pt-48 md:px-16 lg:px-36">
   
    {data
      ?.filter((d) => {
        return d.description === filter;
      })
      .map((d, i) => (
        <div key={i} onClick={() => navigate(`/productK/${d._id}`)}
        >
          <Item
            img={`http://localhost:8080/` + d.images[0]}
            img2={`http://localhost:8080/` + d.images[1]}
            img3={`http://localhost:8080/` + d.images[2]}
            img4={`http://localhost:8080/` + d.images[3]}
            name={d.name}
            price={d.price}
          />
        </div>
      ))}
      </div>
      </div>
  )
}

export default Girl
