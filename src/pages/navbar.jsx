import React, { createContext, useContext, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context, server } from "../main";
import axios from "axios";
import toast from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/navbar.css";
import Cartbody from "../components/navbar/cartbody";



function Navbar() {
  const { IsAuthenticated, setIsAuthenticated ,setuser,user} = useContext(Context);
 
  
  const [showOffCanvas, setShowOffCanvas] = useState(false);

  const toggleOffCanvas = () => {
    
    setShowOffCanvas(!showOffCanvas);
  };

  const logoutSubmit = async() => {
    try {
      const { data } = await axios.get(`${server}/user/logout`, {
        withCredentials: true,
      });
    
      toast.success("hello");
      console.log("logout successfull");
      setIsAuthenticated(false);
     
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };

  return (
   
    
    <nav className="navbar2 sticky-top">
      <div className="container-fluid sticky-top">
      <div className="leftnav">
          <ul className="navbar-nav restnav">
            <li>
              <Link className="nav-link" to={"/"}>
                ZWIGATO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/orders"}>
                ORDERS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/contact"}>
                CONTACT
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link to={"/menu"} className="nav-link">
                MENU
              </Link>
            </li>
          </ul>
        </div>
        <div className="rightnav">
          <ul className="navbar-nav restnav">
            <li className="nav-item">
              {IsAuthenticated? (
                <Link className="nav-link" onClick={{logoutSubmit}}>
                  LOGOUT
                </Link>
              ) : (
                <Link className="nav-link" to={"/login"}>
                  LOGIN
                </Link>
              )}
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/register"}>
                SIGNUP
              </Link>
            </li>
            <li className="nav-item">
              <Link
                // to={"/cart"}
                className="nav-link"
                onClick={toggleOffCanvas}
              >
                <FaShoppingCart />
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Off-canvas menu */}
      <div
        className={`offcanvas offcanvas-start ${showOffCanvas ? "show" : ""}`}
        // tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Your Cart
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            onClick={toggleOffCanvas}
          ></button>
        </div>
        <div className="offcanvas-body">
          <Cartbody/>
        </div>
      </div>
    </nav>

  );
}

export default Navbar;
