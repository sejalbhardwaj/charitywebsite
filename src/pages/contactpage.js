import React from "react";
import Navbar from "../components/navbar";
import Contactus from "../components/contactus";
import Footer from "../components/footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Contactpage = () => {
  return (
    <>
      <Navbar />
      <Contactus/>
      <Footer />
    </>
  );
};

export default Contactpage;
