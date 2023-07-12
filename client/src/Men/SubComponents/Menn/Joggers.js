import React from 'react'
import { useNavigate } from 'react-router-dom';
import Item from '../Men/Page2W/Item';

function Joggers({data,filter}) {
    const navigate= useNavigate();
  return (
    <div>

       {/* 1 large img */}
       <div
        className="pt-10 lg:pt-40  flex shrink justify-center md:pt-48 cursor-pointer"
        xs={12}
        md={12}
       
      >
        <img className="w-5/6" src="../images/men/men-shose/shose_2.jpg" />
      </div>


    <div className="grid  gap-x-2 md:gap-x-3 gap-y-5  grid-cols-2 md:grid-cols-3 pt-10 md:pt-20 md:px-16 lg:px-36">
   
    {data
      ?.filter((d) => {
        return d.description === filter;
      })
      .map((d, i) => (
        <div key={i} onClick={() => navigate(`/productM/${d._id}`)}>
          <Item
            img={`https://zara-hof3.onrender.com/` + d.images[0]}
            img2={`https://zara-hof3.onrender.com/` + d.images[1]}
            img3={`https://zara-hof3.onrender.com/` + d.images[2]}
            name={d.name}
            price={d.price}
          />
        </div>
      ))}
      </div>
      </div>
  )
}

export default Joggers
