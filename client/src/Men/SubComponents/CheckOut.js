import React, { useState, useEffect } from 'react'
import { useAuth } from '../../context/Author';
import { useCart } from '../../context/Cart';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AiFillQuestionCircle } from "react-icons/ai";
import { Badge } from "antd";

const CheckOut = () => {
    const [auth, setAuth] = useAuth();
  //state
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [cart, setCart] = useCart();
  const [quantity, setQuantity] = useState(1);

  //get user data
  useEffect(() => {
    const {
      firstName,
      lastName,
      email,
      city,
      postalCode,
      address,
      state,
      phone,
    } = auth?.user;
    setFirstName(firstName);
    setLastName(lastName);
    setEmail(email);
    setCity(city);
    setPostalCode(postalCode);
    setAddress(address);
    setState(state);
    setPhone(phone);
  }, [auth?.user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        'https://zara-hof3.onrender.com' + `api/v1/auth/profile`,
        {
          firstName,
          lastName,
          email,
          city,
          postalCode,
          address,
          state,
          phone,
        }
      );
      if (data?.error) {
        // toast.error(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        // toast.success("Profile updated successfully");
      }
    } catch (error) {
      console.log(error);
      // toast.error("Error in updating");
    }
  };

  // total

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((p) => {
        total += quantity * p.price;
      });
      return total.toLocaleString("EUR", {
        style: "currency",
        currency: "EUR",
      });
    } catch (error) {
      console.log(error);
    }
  };
  // after 200 add
  const totalPrice1 = () => {
    try {
      let total = 0;
      cart?.map((p) => {
        total += quantity * p.price + 20.95;
      });
      return total.toLocaleString("EUR", {
        style: "currency",
        currency: "EUR",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pt-28">
      <Container fluid className="m-3 p-3">
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            {" "}
            <div className="  px-12 pt-10 flex flex-col w-full">
              <div className="flex flex-col  w-full ">
                <div className="flex items-baseline justify-between">
                  {" "}
                  <p className="text-sm font-semibold">CONTACT INFORMATION</p>
                  <p className="text-[11px] my-3">
                    ALREADY HAVE AN ACCOUNT ?
                    <span className="hover:underline underline-offset-2 hover:font-bold">
                      <Link to="/login" className="hover:text-black">
                        LOGIN
                      </Link>
                    </span>{" "}
                  </p>
                </div>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      <label className="text-sm font-semibold pt-3">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        // placeholder="E-MAIL"
                        value={email}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full  border-b border-black text-xs py-2 my-2 outline-0"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <label className="text-sm font-semibold pt-2">
                        FIRST NAME
                      </label>

                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        // placeholder="FIRST NAME"
                        value={firstName}
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full  border-b border-black text-xs py-2 my-2 outline-0"
                      />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <label className="text-sm font-semibold pt-2">
                        LAST NAME
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        value={lastName}
                        required
                        onChange={(e) => setLastName(e.target.value)}
                        // placeholder="LAST NAME"
                        className="w-full  border-b border-black text-xs py-2 my-2 outline-0"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <label className="text-sm font-semibold pt-2">
                        ADDRESS
                      </label>{" "}
                      <input
                        id="address"
                        name="address"
                        type="address"
                        value={address}
                        required
                        onChange={(e) => setAddress(e.target.value)}
                        // placeholder="ADDRESS"
                        className="w-full  border-b border-black text-xs py-2 my-2 outline-0"
                      />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <label className="text-sm font-semibold pt-2">
                        CITY/TOWN
                      </label>
                      <input
                        id="city"
                        name="city"
                        onChange={(e) => setCity(e.target.value)}
                        type="city"
                        value={city}
                        required
                        // placeholder="CITY/TOWN"
                        className="w-full  border-b border-black text-xs py-2 my-2 outline-0"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <label className="text-sm font-semibold pt-2">
                        POSTAL CODE/ZIP
                      </label>{" "}
                      <input
                        id="postalCode"
                        name="postalCode"
                        type="number"
                        required
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        // placeholder="POSTAL CODE/ZIP"
                        className="w-full  border-b border-black text-xs py-2 my-2 outline-0"
                      />
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <label className="text-sm font-semibold pt-2">
                        STATE/PROVINCE
                      </label>{" "}
                      <input
                        id="state"
                        name="state"
                        value={state}
                        required
                        onChange={(e) => setState(e.target.value)}
                        type="text"
                        // placeholder="STATE/PROVINCE"
                        className="w-full  border-b border-black text-xs py-2 my-2 outline-0"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <label className="text-sm font-semibold pt-2">
                        TELEPHONE
                      </label>
                      <input
                        type="number"
                        id="phone"
                        name="phone"
                        value={phone}
                        required
                        onChange={(e) => setPhone(e.target.value)}
                        // placeholder="TELEPHONE"
                        className="w-full  border-b border-black text-xs py-2 my-2 outline-0"
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                      <button className="mt-10 py-3 mb-5 w-full  text-xs border-t border-b border-l border-r text-black border-black ">
                        <Link to="/payment" className="hover:text-black">
                          PLACE ORDER
                        </Link>
                      </button>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className=" md:border-l border-l-none  border-gray-300  py-14 pl-14 pr-[26%] h-full ">
              {cart?.map((p) => (
                <>
                  <div className="flex mb-4 ">
                    <div className="relative">
                      <Badge
                        count={quantity}
                        showZero
                        color="#000000"
                        className=" right-0 absolute"
                      >
                        <div
                          className="w-[70px] h-[68px] rounder-[200px] overflow-hidden bg-white border-black absolute"
                          style={{
                            borderRadius: "11px",
                            border: "1px solid #dddddd ",
                          }}
                        >
                          <img
                            src={`https://zara-hof3.onrender.com` + p.images[0]}
                            className="w-[50px] ml-[10px] object-cover"
                            alt={p.name}
                          />
                        </div>
                      </Badge>
                    </div>

                    <div className="col pt-2 ml-20 ">
                      <p className="font-bold text-[13px]">{p.name}</p>
                      {/* <p className="font-light text-[12px] text-black">
                        {p.description}
                      </p> */}
                      <p className="font-light text-[12px] text-black">
                        EU M / US M | BROWN / ECRU
                      </p>
                    </div>
                    <div>
                      <p className="item-center font-bold text-[13px] mt-4">
                        Rs{p.price}
                      </p>
                    </div>
                  </div>
                </>
              ))}

              <hr className="mb-4  mt-4 text-black" />

              <div className="flex justify-between">
                <p className="font-light text-[13px] text-black">Subtotal </p>
                <p className="font-bold text-[13px] text-black">
                  {totalPrice()} EUR
                </p>
              </div>

              <div className="flex justify-between">
                <p className="font-medium text-[13px] text-black relative">
                  Shipping
                  <AiFillQuestionCircle className="absolute top-[4%] left-14 text-lg " />
                </p>

                <p className="font-medium text-[13px] text-black">20.95 EUR</p>
              </div>

              <hr className="mb-4  mt-4 text-black" />

              <div className="flex justify-between">
                <p className="font-medium text-[16px] text-black">Total</p>
                <p className="font-medium text-2xl text-black">
                  <span className="text-black text-[16px]">
                    {" "}
                    {totalPrice1()} EUR
                  </span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CheckOut

