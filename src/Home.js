import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Feature from "./components/feature";
import About from "./components/about";
import Contactus from "./components/contactus";
import Footer from "./components/footer";

import "@fortawesome/fontawesome-free/css/all.min.css";


const Home = () => {
  return (
    <>
      <Navbar />
      
        <div className="content-container">
        
          <Header />
         
          <Feature />
          <About />
          <Contactus/>
          <Footer />
       
      </div>
    </>
  );
};

export default Home;
