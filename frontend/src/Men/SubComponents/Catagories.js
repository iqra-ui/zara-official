import React from "react";
// import Layout from "../../Main_Component/Layout";
import useCategory from "../../hooks/useCategories";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categories = () => {
  const categories = useCategory();
  return (
    <div className="flex column ">
   <div className="my- 5 flex w-full justify-center md:justify-start">
              <input
              type="radio"
              name="category"
              id="women"
              className="hidden peer"
            />
       
          
            {categories?.map((c) => ( 
            //   <div className="my- 5 flex w-full justify-center md:justify-start">
            //   <input
            //   type="radio"
            //   name="category"
            //   id="women"
            //   className="hidden peer"
            // />   
             <label 
             className="cursor-pointer w-full peer-checked:font-bold relative before:absolute before:w-2/12 before:h-0.5 peer-checked:before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4">
              {c.name}
              </label>  
            
            ))}
       
   </div>


   
    </div>
  );
};

export default Categories;
