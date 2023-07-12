import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useProduct() {

  const params = useParams();
  const [products, setProducts] = useState([]);


  //get all product
  const getAllProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://zara-hof3.onrender.com/api/v1/product/get-product`
      );
      if (data?.success) {
        setProducts(data?.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProduct();
  }, []);


  return products;
}
