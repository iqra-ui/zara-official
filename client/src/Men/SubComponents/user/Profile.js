import React, { useEffect, useState } from "react";
// import Layout from "../../Main_Component/Layout";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import { BiShow, BiHide } from "react-icons/bi";

import UserMenu from "./UserMenu";
import axios from "axios";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/Author";
// import { useAuth } from "../../context/Author";

const Profile = () => {
  //context
  const [auth, setAuth] = useAuth();
  //state
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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  //get user data
  useEffect(() => {
    const {
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
    } = auth?.user;
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setPassword(password);
    setConfirmPassword(confirmPassword);
    setCity(city);
    setPostalCode(postalCode);
    setAddress(address);
    setState(state);
    setPhone(phone);
    setAnswer(answer);
  }, [auth?.user]);

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        `https://zara-hof3.onrender.com/api/v1/auth/profile`,
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
      if (data?.error) {
        toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        toast.success("Profile updated successfully");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error in updating");
    }
  };

  return (
 
    <div className="pt-10">
      <Container fluid className="m-3 p-3">
        <Row>
       
          <Col md={12}>
            {" "}
            <div className="p-3 md:p-4 mt-16">
              <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
                <h1 className="text-center text-2xl font-bold">
                  UPDATE USER PROFILE
                </h1>

                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-MAIL"
                    value={email}
                    disabled
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full md:w-[440px] border-b border-black text-xs py-2 my-3 outline-0"
                  />

                  {/* <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          name="password"
                          placeholder="PASSWORD"
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
                  </Row> */}

                  <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="FIRST NAME"
                        value={firstName}
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
                        onChange={(e) => setAnswer(e.target.value)}
                        type="text"
                        placeholder="SAVE A WORD FOR RECOVERY PASSWORD"
                        className="w-full border-b border-black text-xs py-2 my-3 outline-0"
                      />
                    </Col>
                  </Row>

                  <button className="mt-10 py-3 mb-5 w-full md:w-[440px] text-xs border-t border-b border-l border-r text-black border-black ">
                    <Link to="" className="hover:text-black">
                      UPDATE ACCOUNT
                    </Link>
                  </button>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
   
  );
};

export default Profile;