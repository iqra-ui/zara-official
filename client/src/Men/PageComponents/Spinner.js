import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Spinner = ({ path = "login" }) => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const interval = setInterval(() => {
      setCount((preValue) => --preValue);
    }, 1000);
    count === 0 &&
      navigate(`/${path}`, {
        state: location.pathname,
      });
    return () => clearInterval(interval);
  }, [count, navigate, location, path]);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center absolute mt-44">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading.....</span>
        </div>
      </div>
      <h3 className="text-center">redirecting to you in {count} second</h3>
    </>
  );
};

export default Spinner;