import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png"
const Navbar = () =>{
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";
    return (
        <>

<div className="container nav_bg">
  <div className="row">
    <div className="">



            <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid"> 
    <Link  className="navbar-brand" to="/">
    <img src={Logo} width="250"/>
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/career">Career</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
      
       
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  </div>
</div>
        </>
    )
}
export default Navbar;