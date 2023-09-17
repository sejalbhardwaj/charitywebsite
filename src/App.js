import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Aboutpage from "./pages/aboutpage";
import Work from "./pages/workpage";
import Contactpage from "./pages/contactpage";
import Donatepage from "./pages/donatepage";
import Mediapage from "./pages/mediapage";
import SingleWorkPage from "./pages/singleworkpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/donate" element={<Donatepage />} />
      <Route path="/media" element={<Mediapage />} />
      <Route path="/work" element={<Work />} />
      <Route path="/work/:workId" element={<SingleWorkPage />} />
    </Routes>
  );
}
export default App;
