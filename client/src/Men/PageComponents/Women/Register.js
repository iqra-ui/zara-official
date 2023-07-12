import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { BiShow, BiHide } from "react-icons/bi";
import axios from "axios";
 import { toast } from "react-toastify";
// import Layout from "../PageComponents/Layout";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://zara-hof3.onrender.com/api/v1/auth/register`,
        {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          city,
          postalCode,
          address,
          state,
          phone,
          answer,
        }
      );
      if (res.data.success) {
        toast.success(" Register Successfully");
        navigate("/login");
      } else {
        toast.error("res.data.message");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in Registration");
    }
  };
  return (
    // <Layout>
      <div className=" pt-32 md:pt-40 px-12 flex flex-col md:flex-row w-full">
        <div className="flex flex-col  w-full md:w-3/5 ">
          <p className="text-sm font-semibold">PERSONAL DETAILS</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="E-MAIL"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              className="w-full md:w-[440px] border-b border-black text-xs py-2 my-3 outline-0"
            />

            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="PASSWORD"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-b border-black text-xs py-2 my-3 outline-0 "
                  />
                  <span
                    className="flex text-xl cursor-pointer absolute top-5 right-2"
                    onClick={handleShowPassword}
                  >
                    {showPassword ? <BiShow /> : <BiHide />}
                  </span>
                </div>
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="RAPEAT PASSWORD"
                    className="w-full border-b border-black text-xs py-2 my-3 outline-0"
                  />
                  <span
                    className="flex text-xl cursor-pointer absolute top-5 right-2"
                    onClick={handleShowConfirmPassword}
                  >
                    {showConfirmPassword ? <BiShow /> : <BiHide />}
                  </span>
                </div>
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="FIRST NAME"
                  value={firstName}
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full border-b border-black text-xs py-2 my-3 outline-0"
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={lastName}
                  required
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="LAST NAME"
                  className="w-full border-b border-black text-xs py-2 my-3 outline-0"
                />
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                {" "}
                <input
                  id="address"
                  name="address"
                  type="address"
                  value={address}
                  required
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="ADDRESS"
                  className="w-full border-b border-black text-xs py-2 my-3 outline-0"
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <input
                  id="city"
                  name="city"
                  onChange={(e) => setCity(e.target.value)}
                  type="city"
                  value={city}
                  required
                  placeholder="CITY/TOWN"
                  className="w-full border-b border-black text-xs py-2 my-3 outline-0"
                />
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                {" "}
                <input
                  id="postalCode"
                  name="postalCode"
                  type="number"
                  required
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  placeholder="POSTAL CODE/ZIP"
                  className="w-full border-b border-black text-xs py-2 my-3 outline-0"
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                {" "}
                <input
                  id="state"
                  name="state"
                  value={state}
                  required
                  onChange={(e) => setState(e.target.value)}
                  type="text"
                  placeholder="STATE/PROVINCE"
                  className="w-full border-b border-black text-xs py-2 my-3 outline-0"
                />
              </Col>
            </Row>

            <Row>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  value={phone}
                  required
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="TELEPHONE"
                  className="w-full border-b border-black text-xs py-2 my-3 outline-0"
                />
              </Col>
              <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                <input
                  name="answer"
                  id="answer"
                  value={answer}
                  required
                  onChange={(e) => setAnswer(e.target.value)}
                  type="text"
                  placeholder="SAVE A WORD FOR RECOVERY PASSWORD"
                  className="w-full border-b border-black text-xs py-2 my-3 outline-0"
                />
              </Col>
            </Row>

            <button className="mt-10 py-3 mb-5 w-full md:w-[440px] text-xs border-t border-b border-l border-r text-black border-black ">
              <Link to="" className="hover:text-black">
                CREATE ACCOUNT
              </Link>
            </button>
          </form>
        </div>
      </div>
    // </Layout>
  );
};

export default Register;