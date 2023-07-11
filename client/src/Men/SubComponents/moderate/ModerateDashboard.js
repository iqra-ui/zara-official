import React from "react";

import { Col, Container, Row, Button } from "react-bootstrap";
import { useAuth } from "../../../context/Author";

import ModerateMenu from "./ModerateMenu";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
const ModerateDashboard = () => {
  const [auth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    // <Layout title={"Dashboard - BAROQUE"}>
    <div className="pt-20">
      <Container fluid className="m-3 p-3">
        <Row>
          <Col md={3}>
            <ModerateMenu />
          </Col>
          <Col md={9}>
            <Button>
              <Link to={"/login"} onClick={handleLogout}>
                <p className="text-sm hover:text-black">Logout</p>{" "}
              </Link>
            </Button>
            <div className="text-center  ml-64 mt-20 w-[400px] text-2xl font-bold text-black hover:drop-shadow  bg-cyan-200 rounded-lg p-3">
              <p>
                Name:
                <br />
                <p className="text-lg ">{auth?.user?.name}</p>
              </p>

              <p>
                Email:
                <br />
                <p className="text-lg ">{auth?.user?.email}</p>
              </p>
              <p>
                Contact:
                <br />
                <p className="text-lg ">{auth?.user?.phone}</p>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    // </Layout>
  );
};

export default ModerateDashboard;