import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function useCategory() {
  const [categories, setCategories] = useState([]);
  const params = useParams();
  // const [product, setProduct] = useState({});


  //get all category
  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/category/get-category`
      );
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);
  // useEffect(() => {
  //   if (params?.slug) getCategories();
  // }, [params?.slug]);

  return categories;
}
