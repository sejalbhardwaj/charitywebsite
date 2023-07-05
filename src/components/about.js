import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/about");
    window.scrollTo(0, 0); 
  };
  return (
    <>
      <section className="about-container">
        <div className="container">
          <h1 className="main-heading">About us</h1>

          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="about-content">
                <ul className="tab-nav">
                  <li>
                    <button
                      className="tab-btn"
                      onClick={handleNavigate}
                    >
                      Our Mission
                    </button>
                  </li>
                  <li>
                    <button
                      className="tab-btn"
                      onClick={handleNavigate}
                    >
                      Our Vision
                    </button>
                  </li>
                </ul>
                <div className="tab-content">
                  <p className="about-section-text">
                    We are dedicated to making a positive impact on society
                    through various initiatives. Our focus areas include the
                    establishment and operation of public interest facilities
                    such as hospitals, orphanages, hostels, libraries, and old
                    age homes. We also strive to provide quality education by
                    setting up educational institutions in fields like
                    engineering, medical, arts, and more. Furthermore, we are
                    committed to skill development training for the
                    underprivileged, collaboration with government welfare
                    schemes, and conducting free medical camps for the welfare
                    of underprivileged individuals. Our efforts extend to
                    organizing educational exhibitions, seminars, and personal
                    development programs.
                  </p>
                  <ul className="tab-list">
                    <li className="tab-item">
                      <div className="item-icon">
                        <i
                          className="fas fa-solid fa-circle-check"
                          style={{ color: "#96160f" }}
                        ></i>
                      </div>
                      <p className="tab-text">Charity For Food</p>
                    </li>
                    <li className="tab-item">
                      <div className="item-icon">
                        <i
                          className="fas fa-solid fa-circle-check"
                          style={{ color: "#96160f" }}
                        ></i>
                      </div>
                      <p className="tab-text">Charity For Education</p>
                    </li>
                    <li className="tab-item">
                      <div className="item-icon">
                        <i
                          className="fas fa-solid fa-circle-check"
                          style={{ color: "#96160f" }}
                        ></i>
                      </div>
                      <p className="tab-text">Charity For Medical</p>
                    </li>
                  </ul>
                  <div className="learnmorebtn">
                    <button
                      className="tab-btn"
                      onClick={handleNavigate}
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
