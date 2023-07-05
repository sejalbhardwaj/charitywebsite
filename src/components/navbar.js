import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/donate");
    window.scrollTo(0, 0); 
  };
  return (
    <nav className="navbar navbar-bg navbar-expand-lg">
      <div className="container">
        <img src="./photos/logo.png" alt="logo" onClick={()=>navigate('/')} / >
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/work">Our Work</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/media">Media Gallery</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact us</Link>
            </li>
            <li className="nav-item">
              <button className="btn " onClick={handleNavigate} >Donate</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
