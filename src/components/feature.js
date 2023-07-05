import React from "react";

const Feature = () => {
  return (
    <section className="section features">
      <div className="container">
        <ul className="features-list">
          <li>
            <div className="item-icon">
              <i
                className="fas fa-regular fa-snowflake"
                style={{ color: "#96160f" }}
              ></i>
              <h3 className="h4 item-title">Safe Shelter</h3>
            </div>
          </li>

          <li>
            <div className="item-icon">
              <i className="fas fa-leaf" style={{ color: "#96160f" }}></i>
              <h3 className="h4 item-title">Emergency Relief</h3>
            </div>
          </li>

          <li>
            <div className="item-icon">
              <i
                className="fas fa-solid fa-school"
                style={{ color: "#96160f" }}
              ></i>
              <h3 className="h4 item-title">Education Institutions</h3>
            </div>
          </li>
          <li>
            <div className="item-icon">
              <i
                className="fas fa-solid fa-hand-holding-heart"
                style={{ color: "#96160f" }}
              ></i>
              <h3 className="h4 item-title">Healthcare Support</h3>
            </div>
          </li>
          <li>
            <div className="item-icon">
              <i
                className="fas fa-solid fa-hands-holding-child"
                style={{ color: "#96160f" }}
              ></i>
              <h3 className="h4 item-title">Women and Children Empowerment</h3>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Feature;
