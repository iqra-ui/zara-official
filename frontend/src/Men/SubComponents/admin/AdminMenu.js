import React from "react";

import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
   
    <div class="z-10 absolute h-full top-44 hidden md:flex fixed left-0 p-6 border-r border-black h-screen shadow flex-col">
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
      to="/dashboard/admin/products"
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
  );
};

export default AdminMenu;
