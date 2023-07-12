import React from "react";
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate()
  const handleNavigate = () => {
    navigate("/donate");
    window.scrollTo(0, 0); 
  };
  return (
    
      <footer>
        <div className="donation-container">
          <div className="row footer-donation">
            <div className="col-8 col-lg-9 col-md-9 col-sm-8">
              <p>Your donation and contribution can make a huge difference.</p>
            </div>
            <div className="col-4 col-lg-3 col-md-3 col-sm-4">
              <button className="btn footer-donate donate-button" onClick={handleNavigate}>Donate</button>
            </div>
          </div>
        </div>
  

    
   
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-12">
                <h2>Useful Links</h2>
                <ul>
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/work">Our Work</a>
                  </li>
                  <li>
                    <a href="/contact">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 ">
            <h2>Get in touch</h2>
            <div className="icons ">
              <ul>
                <li>
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:matoshriahilyabai@gmail.com">
                    matoshriahilyabai@gmail.com
                  </a>
                </li>
                <li>
                  <i className="fa-solid fa-phone"></i> <a href="/">8909111163</a>
                </li>
                <li>
                  <i className="fa-solid fa-brands fa-twitter"></i>
                  <a href="https://twitter.com/MatoshriH?s=20">@MatoshriH</a>
                </li>
                <li>
                  <i className="fa-solid fa-brands fa-facebook"></i>
                  <a href="https://www.facebook.com/ahilyabaiholkarcharitabletrust/">
                    matoshriahilyabaiholkercharitabletrust
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-5">
          <p className="main-hero-para text-center w-100">
           © Copyright 2023 | Matoshri Ahilyabai Holkar Charitable Trust| All Rights Reserved | 

          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
