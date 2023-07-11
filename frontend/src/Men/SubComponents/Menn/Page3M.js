import axios from 'axios';
import React, { useState,useEffect } from 'react'
import MainM from './MainM';
import GridM from './GridM';

function Page3M(props) {
    const [data1, setData1]=useState([]);
    useEffect(() => {
      async function getAllProduct() {
        const response = await axios.get(
          "http://localhost:8080/api/v1/product/get-product"
        );
        setData1(response.data.products);
      }
      getAllProduct();
    }, []);
  
  return (
    <div>
    
    
      <MainM   data={data1} filter={"6470bf7776880bcb9a668e3c"} />
    
      <GridM   data={data1} filter={"6470bf7776880bcb9a668e3c"}  />

    
    </div>
  )
}

export default Page3M
