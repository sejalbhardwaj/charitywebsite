import React from "react";
import Navbar from "../components/navbar";
import Feature from "../components/feature";

import Footer from "../components/footer";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Workmedia from "../components/work";

const Work = () => {
  return (
    <>
      <Navbar />
      <Workmedia />
      <Feature />
      <Footer />
    </>
  );
};

export default Work;
