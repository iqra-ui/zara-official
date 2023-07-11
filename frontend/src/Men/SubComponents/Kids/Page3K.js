import axios from "axios";
import React, { useState, useEffect } from "react";
import MainK from "./MainK";
import GridK from "./GridK";

function Page3K() {
  const [data1, setData1] = useState([]);
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
      <MainK data={data1} filter={"6470bfdf76880bcb9a668e42"} />

      <GridK data={data1} filter={"6470bfdf76880bcb9a668e42"} />
    </div>
  );
}

export default Page3K;
