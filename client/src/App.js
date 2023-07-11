import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Page1 from "./Men/PageComponents/Women/Page1";
import Search from "./Men/PageComponents/Search";
import Login from "./Men/PageComponents/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./Men/Navigation";
import Footer from "./Men/SubComponents/Footer";
import Page2W from "./Men/PageComponents/Women/Page2W";
// import View from "./Men/SubComponents/Men/Page2/View";
import Collection from "./Men/SubComponents/Men/Page2W/Collection";
import Page3 from "./Men/PageComponents/Women/Page3";
import OrderPage from "./Men/SubComponents/ProcessOrder/OrderPage";
import InputData from "./InputData";
import Register from "./Men/PageComponents/Women/Register";
// import CategoryByProduct from "./Men/SubComponents/CategoryByProduct";
import ModerateDashboard from "./Men/SubComponents/moderate/ModerateDashboard";
import ModerateRoute from "./Men/PageComponents/RoutesPri/ModerateRoute";
import Profile from "./Men/SubComponents/user/Profile";
import Orders from "./Men/SubComponents/user/Orders";
import OrdersChat from "./Men/SubComponents/admin/Chats/OrdersChat";
import Dashboard from "./Men/SubComponents/user/Dashboard";
import UserInfo from "./Men/SubComponents/admin/UsersInfo";
import ProductChat from "./Men/SubComponents/admin/Chats/ProductChat";
import Categorys from "./Men/SubComponents/admin/Categorys";
import UpdateCategory from "./Men/SubComponents/admin/UpdateCategory";
import AdminRoute from "./Men/PageComponents/RoutesPri/AdminRoute";
import PrivateRoute from "./Men/PageComponents/RoutesPri/Private";
import Ecommerce from "./Men/SubComponents/admin/Ecommerce";
import Products from "./Men/SubComponents/admin/Products";
import CreateProduct from "./Men/SubComponents/admin/CreateProduct";
import CreateCatagory from "./Men/SubComponents/admin/CreateCatagory";
import AdminDashboard from "./Men/SubComponents/admin/AdminDashboard";
import UpdateProduct from "./Men/SubComponents/admin/UpdateProduct";
import CategoryChat from "./Men/SubComponents/admin/Chats/CategoryChat";
import UsersFromAdmin from "./Men/SubComponents/admin/UsersFromAdmin";
import AdminOrders from "./Men/SubComponents/admin/AdminOrders";
import PForm from "./Men/SubComponents/PForm";
import AdminInfo from "./Men/SubComponents/admin/AdminInfo";
import axios from "axios";
import DressesW from "./Men/SubComponents/Men/Page2W/DressesW";
import AccessoriesW from "./Men/SubComponents/Men/Page2W/AccessoriesW";
import ShoesW from "./Men/SubComponents/Men/Page2W/ShoesW";
import Page2M from "./Men/SubComponents/Menn/Page2M";
import Joggers from "./Men/SubComponents/Menn/Joggers";
import CargoDress from "./Men/SubComponents/Menn/CargoDress";
import ViewAll from "./Men/SubComponents/Menn/ViewAll";
import Page3M from "./Men/SubComponents/Menn/Page3M";
import New from "./Men/SubComponents/Kids/New";
import Boy from "./Men/SubComponents/Kids/Boy";
import Girl from "./Men/SubComponents/Kids/Girl";
import NewBorn from "./Men/SubComponents/Kids/NewBorn";
import Page2K from "./Men/SubComponents/Kids/Page2K";

import Swimmer from "./Men/SubComponents/Kids/Swimmer";
import Page3K from "./Men/SubComponents/Kids/Page3K";
import SearchPage from "./Men/PageComponents/SearchPage";

function App(props) {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);

  useEffect(() => {
    async function getCategory() {
      const response = await axios.get(
        "http://localhost:8080/api/v1/category/get-category"
      );
      setData(response.data.category);
    }
    getCategory();
  }, []);

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
      {/* <InputData/> */}
      {/* <PForm/> */}
      {/* <CategoryByProduct/> */}

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Page1 data={data} />} />

          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="search" element={<Search />} />
          <Route path="/searchPage" element={<SearchPage />} />

          <Route path="/women" element={<Page2W />}>
            <Route
              path="/women"
              element={
                <Collection data={data1} filter={"6470bef976880bcb9a668e2f"} />
              }
            />
            <Route
              path="dresses"
              element={<DressesW data={data1} filter={"womenDresses"} />}
            />
            <Route
              path="accessories"
              element={<AccessoriesW data={data1} filter={"womenJwerelly"} />}
            />
            <Route
              path="shoes"
              element={<ShoesW data={data1} filter={"womenShoes"} />}
            />
          </Route>

          <Route path="/men" element={<Page2M />}>
            <Route path="/men" element={<ViewAll data={data1} />} />
            <Route
              path="dresses"
              element={<CargoDress data={data1} filter={"menDresses"} />}
            />
            <Route
              path="joggers"
              element={<Joggers data={data1} filter={"menShoes"} />}
            />
          </Route>

          <Route path="/kids/new" element={<Page2K />}>
            <Route path="/kids/new" element={<New />} />
            <Route
              path="girl"
              element={<Girl data={data1} filter={"girlsDress"} />}
            />
            <Route path="boy" element={<Boy data={data1} />} />
            <Route path="newBorn" element={<NewBorn data={data1} />} />
            <Route path="swimmer" element={<Swimmer data={data1} />} />
          </Route>

          {/* womennnnnnnnn  */}
          <Route path="/product/:_id" element={<Page3 />} />
          {/* mennn */}
          <Route path="/productM/:_id" element={<Page3M />} />
          {/* kidsss  */}
          <Route path="/productK/:_id" element={<Page3K />} />

          <Route path="/cartPage" element={<OrderPage />} />

        
          <Route path="/dashboard" element={<AdminRoute />}>
            <Route path="/dashboard/admin" element={<AdminInfo />} />
            <Route path="/dashboard/admin/account" element={<AdminInfo />} />
            <Route
              path="/dashboard/admin/create-product"
              element={<CreateProduct />}
            />
            <Route path="/dashboard/admin/products" element={<Products />} />
            <Route
              path="/dashboard/admin/dashboard"
              element={<AdminDashboard />}
            />


            {/* </Route> */}
         
            {/* <Route path="admin/ecommerce" element={<Ecommerce />} /> */}

            <Route path="admin/products/:_id" element={<UpdateProduct />} />

   

            {/* <Route path="admin/users" element={<UsersFromAdmin />} /> */}
            {/* <Route path="admin/orders" element={<AdminOrders />} /> */}
            {/* <Route path="admin/info" element={<UserInfo />} /> */}
            {/* <Route path="admin/categoryChat" element={<CategoryChat />} /> */}
            {/* <Route path="admin/productChat" element={<ProductChat />} /> */}
            {/* <Route path="admin/ordersChat" element={<OrdersChat />} /> */}
          </Route>

          {/* user dashboard  */}
          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard />} />
            {/* <Route path="user/orders" element={<Orders />} /> */}
            <Route path="user/profile" element={<Profile />} />
          </Route>

          <Route path="/dashboard" element={<ModerateRoute />}>
            <Route path="modrate" element={<ModerateDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
