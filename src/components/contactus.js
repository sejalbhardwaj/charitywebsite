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
                  <h2 className="contact-heading">Contact Number :</h2>
                  <span className="contact-details">8909111163</span>
                  <h2 className="contact-heading">Join Us</h2>
                  <span className="icons ">
                    <ul>
                    <li >
                 
                  <a href="https://chat.whatsapp.com/JEqnyLuXIsuHtNz20h7FkU"> 
                  <i className=" fa-solid fa-brands fa-whatsapp"></i>
                    Join WhatsApp Group - Click here 
                  </a>
                </li>
                  <li>
                  <a href="https://twitter.com/MatoshriH?s=20">
                  <i className="fa-solid fa-brands fa-twitter"></i>
                  Twitter - @MatoshriH</a>
                </li>
                <li>
                <a href="https://www.facebook.com/ahilyabaiholkarcharitabletrust/">
                          <i className="fa-solid fa-brands fa-facebook fa-lg"></i>
                          Facebook - matoshriahilyabaiholkercharitabletrust
                        </a>
                </li>
                </ul>
                  </span>
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
