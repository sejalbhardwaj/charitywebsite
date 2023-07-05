import React from "react";

const Contactus = () => {
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <h1 className="main-heading">Connect with us</h1>

          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-6">
                  <figure>
                    <img
                      src=".\photos\logo.png"
                      alt="contact-us img"
                      className="img"
                    />
                  </figure>
                </div>

                <div className="contact-right-side col-12 col-lg-6">
                  <h2 className="contact-subheading">To contact us, you can reach out at:</h2>
                  <h2 className="contact-heading">Address:</h2>
                  <span className="contact-details">396, Roshanpur Dourli, Roorkee Road, Meerut, UP</span>
                  <h2 className="contact-heading">Contact Number:</h2>
                  <span className="contact-details">8909111163</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
