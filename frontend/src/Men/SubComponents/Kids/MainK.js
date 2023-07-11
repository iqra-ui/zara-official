import React, { useEffect, useRef, useState } from "react";
import { useCollapse } from "react-collapsed";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import { Drawer } from "antd";
import { RxCross1 } from "react-icons/rx";
import { Col, Container, Row } from "react-bootstrap";
import { useCart } from "../../../context/Cart";
import { useAuth } from "../../../context/Author";

function MainK({data, filter}) {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [auth, setAuth] = useAuth();
    const params = useParams();

    console.log(params);
    const itemData = data?.filter((d) => {
     return d._id === params._id
    });
    console.log(itemData);
  
    const [open, setOpen] = useState(false);
    const [o, setO] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };
  
    const imgs = [
      "https://static.zara.net/photos///2023/V/0/2/p/0761/469/630/2/w/896/0761469630_1_1_1.jpg?ts=1680104247310",
      "https://static.zara.net/photos///2023/V/0/2/p/0761/469/630/2/w/896/0761469630_2_1_1.jpg?ts=1680104247528",
      "https://static.zara.net/photos///2023/V/0/2/p/0761/469/630/2/w/790/0761469630_2_2_1.jpg?ts=1680104248679",
      "https://static.zara.net/photos///2023/V/0/2/p/0761/469/630/2/w/790/0761469630_2_3_1.jpg?ts=1680104246764",
      "https://static.zara.net/photos///2023/V/0/2/p/0761/469/630/2/w/790/0761469630_2_4_1.jpg?ts=1680104247533",
      "https://static.zara.net/photos///2023/V/0/2/p/0761/469/630/2/w/790/0761469630_2_5_1.jpg?ts=1680104249500",
      "https://static.zara.net/photos///2023/V/0/2/p/0761/469/630/2/w/790/0761469630_2_6_1.jpg?ts=1680104249347",
      "https://static.zara.net/photos///2023/V/0/2/p/0761/469/630/2/w/790/0761469630_6_1_1.jpg?ts=1680082293474",
      "https://static.zara.net/photos///2023/V/0/2/p/0761/469/630/2/w/790/0761469630_6_2_1.jpg?ts=1680082294197",
      "https://static.zara.net/photos///2023/V/0/2/p/0761/469/630/2/w/790/0761469630_6_3_1.jpg?ts=1680082300961",
    ];
  
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  
    const [btns, setBtns] = useState(0);
    const [small, setSmall] = useState("");
    const [medium, setMedium] = useState("");
    const [large, setLarge] = useState("");
    const [xlarge, setXlarge] = useState("");
  
    let i = 0;
    const scroll = useRef();
    const scrollBar = useRef();
    let j = imgs.length - 1;
  
    const handleScroll = () => {
      scrollBar.current.scrollTop =
        (scrollBar.current.clientHeight / imgs.length) * j;
    };
    useEffect(()=>{
     handleScroll();
    },[]);
  return (
    <div className="flex flex-col md:flex-row justify-center lg:justify-between items-end md:pt-36 md:px-12">
    <div
      className="w-56 h-80  hidden lg:block  font-sans ml-10 text-xs text-gray-500 
          overflow-x-hidden scrollbar-w-[1px] scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-200"
    >
      <p>COMPOISTION & CARE</p>

      <p className="mt-5">COMPOISTION</p>

      <p className="leading-normal mt-3">
        We work with monitoring
        <br />
        programmes to ensure
        <br />
        compliance with our social,
        <br />
        environmental and health and
        <br />
        safety standards for our
        <br />
        garments.
        <br />
        <br />
        To assess compliance, we have
        <br />
        developed a programme of <br />
        audits and continuous
        <span {...getCollapseProps()}>
          {" "}
          improvement plans.
          <br />
          <br />
          OUTER SHELL
          <br />
          100% cotton
          <br />
          <br />
          CARE
          <br />
          <br />
          Caring for your clothes is caring for the environment.
          <br />
          <br />
          Freshening up and brushing
          <br />
          garments is a natural way to care
          <br />
          for delicate clothing. If you need to
          <br />
          dry clean a garment, look for a dry
          <br />
          cleaner that uses technologies that
          <br />
          are respectful of the environment.
          <br />
          <br />
          <img
            width={19}
            height={18}
            src="https://static.zara.net/photos///contents/cm/product-cares-8-icon_0.svg?ts=1604343297923"
          />
          <span>
            <p className="ml-7" style={{ marginTop: -16 }}>
              Hand wash at max.
            </p>
          </span>
          <img
            width={17}
            height={17}
            src="https://static.zara.net/photos///contents/cm/product-cares-14-icon_0.svg?ts=1604343289322"
          />
          <span>
            <p className="ml-7" style={{ marginTop: -16 }}>
              Do not use bleach
            </p>
          </span>
          <img
            width={17}
            height={17}
            src="https://static.zara.net/photos///contents/cm/product-cares-17-icon_0.svg?ts=1604343279714"
          />
          <span>
            <p className="ml-7" style={{ marginTop: -16 }}>
              Iron at a maximum{" "}
            </p>
          </span>
          <img
            width={17}
            height={17}
            src="https://static.zara.net/photos///contents/cm/product-cares-125-icon_0.svg?ts=1604671818114"
          />
          <span>
            <p className="ml-7" style={{ marginTop: -16 }}>
              Dry clean with tetraclorothylene
            </p>
          </span>
          <img
            width={17}
            height={17}
            src="https://static.zara.net/photos///contents/cm/product-cares-35-icon_0.svg?ts=1604343281266"
          />
          <span>
            <p className="ml-7" style={{ marginTop: -16 }}>
              Do not tumble dry
            </p>
          </span>
          <img
            width={17}
            height={17}
            src="https://static.zara.net/photos///contents/cm/product-cares-61-icon_0.svg?ts=1604658918504"
          />
          <span>
            <p className="ml-7" style={{ marginTop: -16 }}>
              Wash inside out
            </p>
          </span>
        </span>
      </p>

      <button
        className="border-b border-black"
        {...getToggleProps({
          onClick: () => setExpanded((prevExpanded) => !prevExpanded),
        })}
      >
        {isExpanded ? "View less" : "View more"}
      </button>
    </div>

    <div
      className="lg:ml-36 md:mr-5 w-full md:w-2/4 lg:w-[35%] h-[80vh] md:h-[60vh]  lg:h-[75vh] relative"
      onMouseEnter={() => setBtns(100)}
      onMouseLeave={() => setBtns(0)}
    >
  


<div
        ref={scroll}
        className="snap-y snap-mandatory h-full w-full md:w-10/12 overflow-scroll"
      >
        {data
          ?.filter((d) => {
            return d._id === params._id;
          })
          .map((d, i) => (
            <div key={i}>
              <div className="snap-always  w-full h-full object-cover object-top">
                <img
                  src={`http://localhost:8080/` + d.images[0]}
                  className="w-full h-full object-cover  "
                />
                <img
                  src={`http://localhost:8080/` + d.images[1]}
                  className=" w-full h-full object-cover"
                />
                <img
                  src={`http://localhost:8080/` + d.images[2]}
                  className="  w-full h-full object-cover"
                />
                 <img
                    src={`http://localhost:8080/` + d.images[3]}
                    className="  w-full h-full object-cover"
                  />
              </div>
            </div>
          ))}
          </div>














      <div
        ref={scrollBar}
        className="hidden md:block absolute w-0.5 h-full top-0 right-[10%] overflow-hidden"
      >
        <div
          className={`w-full bg-black transition duration-500 h-full`}
        ></div>
        <div
          className={`w-full bg-gray-300 transition duration-500 h-full`}
        ></div>
      </div>
      <div
        className={
          "hidden md:block absolute transition duration-500 top-0 right-0 w-[7%] opacity-" +
          btns
        }
      >
        {data
          ?.filter((d) => {
            return d._id === params._id;
          })
          .map((d, i) => (
            <div
              key={i}
              className="cursor-pointer w-full object-cover mb-1 "
              onClick={() => {
                scroll.current.scrollTop = scroll.current.clientHeight * i;
                j = d.images.length - 1 - i;
                handleScroll();
              }}
            >
              <img
                src={`http://localhost:8080/` + d.images[0]}
                className="m-1 "
                alt=""
              />
              <img
                src={`http://localhost:8080/` + d.images[1]}
                className="m-1 "
                alt=""
              />
              <img
                src={`http://localhost:8080/` + d.images[2]}
                className="m-1 "
                alt=""
              />
              <img
                src={`http://localhost:8080/` + d.images[3]}
                className="m-1 "
                alt=""
              />
            </div>
          ))}
      </div>
    </div>

    <div className="px-4 md:px-0 w-full md:w-5/12 lg:w-4/12 text-[11px]">
      <div className="w-full h-0.5 flex justify-center md:hidden my-3 mb-5">
        <div className="bg-black w-1/12"></div>
      </div>
      {data
        ?.filter((d) => {
          return d._id === params._id;
        })
        .map((d, i) => (
          <div key={i}>
            <>
              <p className="my-1">{d.name}</p>
              <p className="">{d.price}</p>
            </>
          </div>
        ))}

      <p className="font-light w-10/12">
        Long sleeve hoodie with adjustable hood. Front pouch pocket. Faded and
        ripped effect all over the garment. Ribbed trims.
      </p>
      <p className="font-light text-[10px]">FUCHSIA | 0761/469</p>
      <div className="border-y border-black flex flex-col items-start w-10/12">
        <p
          className={
            "m-0 text-xs hover:bg-gray-200 w-full font-light " + small
          }
          onClick={() => {
            if (i === 0) {
              setMedium("hidden");
              setLarge("hidden");
              setXlarge("hidden");
              i = 1;
            } else {
              setSmall("");
              setMedium("");
              setLarge("");
              setXlarge("");
              i = 0;
            }
          }}
        >
          <input
            type="radio"
            id="small"
            name="size"
            className="peer hidden"
          />
          <label
            htmlFor="small"
            className="peer-checked:font-bold cursor-pointer block w-full py-1"
          >
            EU S / US S
          </label>
        </p>
        <p
          className={
            "m-0 text-xs hover:bg-gray-200 w-full font-light " + medium
          }
          onClick={() => {
            if (i === 0) {
              setSmall("hidden");
              setLarge("hidden");
              setXlarge("hidden");
              i = 1;
            } else {
              setSmall("");
              setMedium("");
              setLarge("");
              setXlarge("");
              i = 0;
            }
          }}
        >
          <input
            type="radio"
            id="medium"
            name="size"
            className="peer hidden"
          />
          <label
            htmlFor="medium"
            className="peer-checked:font-bold cursor-pointer block w-full py-1"
          >
            EU M / US M
          </label>
        </p>

        <p
          className={
            "m-0 text-xs hover:bg-gray-200 w-full font-light " + large
          }
          onClick={() => {
            if (i === 0) {
              setSmall("hidden");
              setMedium("hidden");
              setXlarge("hidden");
              i = 1;
            } else {
              setSmall("");
              setMedium("");
              setLarge("");
              setXlarge("");
              i = 0;
            }
          }}
        >
          <input
            type="radio"
            id="large"
            name="size"
            className="peer hidden"
          />
          <label
            htmlFor="large"
            className="peer-checked:font-bold cursor-pointer block w-full py-1"
          >
            EU L / US L
          </label>
        </p>
        <p
          className={
            "m-0 text-xs hover:bg-gray-200 w-full font-light " + xlarge
          }
          onClick={() => {
            if (i === 0) {
              setSmall("hidden");
              setMedium("hidden");
              setLarge("hidden");
              setXlarge("");
              i = 1;
            } else {
              setSmall("");
              setMedium("");
              setLarge("");
              setXlarge("");
              i = 0;
            }
          }}
        >
          <input
            type="radio"
            id="xlarge"
            name="size"
            className="peer hidden"
          />
          <label
            htmlFor="xlarge"
            className="peer-checked:font-bold cursor-pointer block w-full py-1"
          >
            EU XL / US XL
          </label>
        </p>
      </div>
      <p className="my-2 text-xs font-light">SIZE GUIDE</p>
      {auth?.user ? (
          <>
            <div>
              <button
                onClick={() => {
                  setCart([...cart, itemData[0]]);
                  localStorage.setItem(
                    "cart",
                    JSON.stringify([...cart, itemData[0]])
                  );
                  setO(showDrawer);
                }}
                className="border-y border-x border-black  my-3 py-2 px-16 text-xs hover:border-gray-300"
              >
                ADD TO BAG
              </button>
            </div>
          </>
        ) : (
          <>
            <button
              className="border-y border-x border-black  my-3 py-2 px-16 text-xs hover:border-gray-300"
              onClick={() =>
                navigate("/login", {
                  state: `/product/${params._id}`,
                })
              }
            >
              MUST LOGIN TO ADDED ITEM IN A CART
            </button>
          </>
        )}
      <Drawer
        title=""
        placement="right"
        onClose={onClose}
        open={open}
        width={480}
        closeIcon={<RxCross1 className="ml-96" onClick={onClose} />}
      >
        <p
          className=" translate-x-0 transform transition-transform 
                     overflow-x-hidden scrollbar-w-[1px] scrollbar mr-4  scrollbar-thumb-gray-900 scrollbar-track-gray-200"
        >
          <div className="ml-7">
            <p className="text-black text-sm  ">
              PRODUCT ADDED TO YOUR SHOPPING
              <br />
              BAG
            </p>
            {data
              ?.filter((d) => {
                return d._id === params._id;
              })
              .map((d, i) => (
                <div key={i}>
                  <div className="snap-always snap-start w-full h-full object-cover object-top">
                    <img
                      className="w-24 mt-4"
                      src={`http://localhost:8080/` + d.images[0]}
                    />
                    <span>
                      <p
                        className="ml-32 leading-loose"
                        style={{ marginTop: -144 }}
                      >
                        {d.name}
                        <br />
                        WHITE | 5643/624
                      </p>
                    </span>
                  </div>
                </div>
              ))}

            <div className=" mt-36 w-96 text-center border-black border-t border-l border-r border-b h-10 hover:border-gray-500">
              <Link to="/cartPage">
                <button className="mt-2">SEE SHOPPING BASKET</button>
              </Link>
            </div>

            <p className="text-black mt-5 text-sm ">YOU MAY ALSO LIKE</p>
            <p>COMPLETE YOUR LOOK WITH THE FOLLOWING ITEMS</p>
          </div>
          <Container fluid className="p-0 m-0">
            <Row className="p-0 m-0">
              {data
                ?.filter((d) => {
                  return d.category === filter;
                })
                .map((d, i) => (
                  <Col className="" xs={4} sm={4} md={4} lg={4} xl={4}>
                    <div key={i}>
                      <div>
                        <img
                          className="w-26 p-0 mt-4 "
                          src={`http://localhost:8080/` + d.images[0]}
                        />
                        {d.price}
                      </div>
                    </div>
                  </Col>
                ))}
            </Row>
          </Container>
        </p>
      </Drawer>
      <p>SHIPPING AND RETURNS</p>
    </div>
    <Outlet />
  </div>
  )
}

export default MainK
