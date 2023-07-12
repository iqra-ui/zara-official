import Grid from "../../SubComponents/Men/Page3/Grid";
import React, { useState, useEffect } from "react";

import Main from "../../SubComponents/Men/Page3/Main";
import axios from "axios";
import { useParams } from "react-router-dom";

function Page3(props) {

  const [data1, setData1]=useState([]);
  useEffect(() => {
    async function getAllProduct() {
      const response = await axios.get(
        "https://zara-hof3.onrender.com/api/v1/product/get-product"
      );
      setData1(response.data.products);
    }
    getAllProduct();
  }, []);

 



  
  return (
    <div>
    
    
      <Main   data={data1} filter={"6470bef976880bcb9a668e2f"} />
    
      <Grid  data={data1} filter={"6470bef976880bcb9a668e2f"}  />

    
    </div>
  );
}

export default Page3;
