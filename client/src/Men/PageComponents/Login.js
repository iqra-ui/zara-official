import React, { useState } from "react";
// import Nav from "../SubComponents/Nav";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import axios from "axios";
import { BiShow, BiHide } from "react-icons/bi";
import { useAuth } from "../../context/Author";
// import { useAuth } from "../../context/Author";
// import Layout from "../PageComponents/Layout";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`https://zara-hof3.onrender.com/api/v1/auth/login`,
        { email, password }
      );
      if (res.data.success) {
        toast.success(" Login Successfully");
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
      } else {
        toast.error("res.data.message");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in Login");
    }
  };

  return (
    <div>
      {/* <Nav /> */}
      <div className=" pt-32 md:pt-40 px-12 flex flex-col md:flex-row w-full">
        <div className="flex flex-col  w-full md:w-2/5 ">
          <p className="text-sm font-semibold">LOG IN TO YOUR ACCOUNT</p>
          <form onSubmit={handleSubmit}>
            <input
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="E-MAIL"
              className="w-full border-b border-black text-xs py-2 my-3 outline-0"
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                placeholder="PASSWORD"
                className="w-full border-b border-black text-xs py-2 my-3 outline-0"
              />
              <span
                className="flex text-xl cursor-pointer absolute top-5 right-2"
                onClick={handleShowPassword}
              >
                {showPassword ? <BiShow /> : <BiHide />}
              </span>
            </div>
            <button className="mt-10 py-3 w-full text-xs text-white bg-black">
              LOG IN
            </button>
          </form>

          <p className="text-[10px] my-3">
            Have you{" "}
            <span className="hover:underline underline-offset-2 hover:font-bold">
              <Link to="/forget-password" className="hover:text-black">
                forgotten
              </Link>
            </span>{" "}
            your password?
          </p>
        </div>
        <div className="w-full md:w-2/5 md:mx-32 my-10 md:my-0">
          <p className="text-sm font-semibold">NEED AN ACCOUNT?</p>
          <button className="my-2.5 border-y border-x border-black py-2 w-full text-sm">
            <Link to="/register" className="hover:text-black">
              REGISTER
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;