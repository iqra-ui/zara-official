import React, { useState } from "react";

import { Col, Container, Row, Button } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import { useAuth } from "../../../context/Author";

const AdminDashboard = () => {
  const [auth, setAuth] = useAuth();

  const [account, setAccount] = useState(
    "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
  );
  const [dashboard, setDashboard] = useState("");
  const [btn, setBtn] = useState("");

  return (
    <div>
      <div className=" bg-white relative top-32 fixed z-20 md:top-32 lg:top-32 w-full ">
        <div class="p-3.5 w-full border-b border-black">
          <Link
            to="/dashboard/admin/account"
            class={
              "text-black no-underline mx-3 text-[11px] md:text-xs cursor-pointer" +
              account
            }
            onClick={() => {
              setAccount(
                "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
              );
              setDashboard("");
              setBtn("opacity-0");
            }}
          >
            ACCOUNT
          </Link>
          <Link
            to="/dashboard/admin/dashboard"
            onClick={() => {
              setDashboard(
                "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
              );
              setAccount("");
              // setBtn("");
            }}
            class={
              "no-underline text-black mx-3 text-[11px] md:text-xs cursor-pointer" +
              dashboard
            }
          >
            DASHBOARD
          </Link>
        </div>
      </div>

      <div class="z-10 absolute top-44 hidden md:flex fixed left-0 p-6 border-r border-black h-screen shadow flex-col">
        <a
          class="border-b border-black p-1.5 text-black"
          // href="/account/dashboard"
        >
          Statistics
        </a>
        <a
          class="border-b border-black p-1.5 text-black"
          // href="/account/dashboard/orders"
        >
          Orders
        </a>
        <a
          class="border-b border-black p-1.5 text-black"
          // href="/account/dashboard/users"
        >
          Users
        </a>
        <Link
          class="border-b border-black p-1.5 text-black"
         to="products"
        >
          Products
        </Link>
        <Link
          class="border-b border-black p-1.5 text-black"
          to="/dashboard/admin/create-product"
        >
          Create Product
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
