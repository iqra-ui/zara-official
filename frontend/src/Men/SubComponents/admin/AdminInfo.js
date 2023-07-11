import React, { useState } from "react";
import { useAuth } from "../../../context/Author";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";

function AdminInfo() {
  const [auth, setAuth] = useAuth();
  const [account, setAccount] = useState(
    "font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
  );
  const [dashboard, setDashboard] = useState("");
  const [btn, setBtn] = useState("");

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
  };
  return (
    <div>
      <div className=" bg-white top-32 fixed  md:top-32 lg:top-32 w-full ">
        <div class="p-3.5 w-full border-b border-black">
          <Link
            to="/dashboard/admin/account"
            className={
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
              setBtn("");
            }}
            className={
              "no-underline text-black mx-3 text-[11px] md:text-xs cursor-pointer" +
              dashboard
            }
          >
            DASHBOARD
          </Link>
        </div>
      </div>


     {/* admin info-form */}
      <Container>
        <Row>
          <Col md={8} lg={12} sm={12}>
            <form class="w-full md:w-1/2 mt-52 lg:w-1/3">
              <p class="text-sm font-bold">FIRST NAME</p>
              <p class="border-b border-black p-1 text-sm w-full text-gray-500">
              {auth?.user?.firstName}
              </p>
              <p class="pt-6 text-sm font-bold">LAST NAME</p>
              <p class="border-b border-black p-1 text-sm w-full text-gray-500">
              {auth?.user?.lastName}
              </p>
              <p class="pt-6 text-sm font-bold">EMAIL</p>
              <p class="border-b border-black p-1 text-sm w-full text-gray-500">
              {auth?.user?.email}
              </p>
              <p class="pt-6 text-sm font-bold">ADDRESS</p>
              <p class="border-b border-black p-1 text-sm w-full text-gray-500">
              {auth?.user?.address}
              </p>
              <div class="w-full flex justify-end">
                <span class="text-center bg-black text-white my-3  hover:border-gray-400 py-2.5 px-3.5 text-xs cursor-pointer">
                  EDIT
                </span>
              </div>
              <span class="cursor-pointer mt-10 text-sm border-b border-black text-gray-500 font-bold">
                <Link to={"/login"} onClick={handleLogout} className="hover:text-black">
                  Sign Out
                </Link>
              </span>
              <p class="text-xs text-gray-400 my-6">
                At ZARA we take your privacy very seriously and are committed to
                the protection of your personal data. Learn more about how we
                care for and use your data in our Privacy Policy.
              </p>
            </form>
          </Col>
        </Row>

       
      </Container>
    </div>
  );
}

export default AdminInfo;
