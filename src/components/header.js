import React from 'react';

const Header = () => {
  return (
    <>
      <header>
        <section className='container-fluid'>
          <div className='row'>
            <h2 style={{ textAlign: 'center' }}>Matoshri Ahilyabai Holkar Charitable Trust</h2>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade captions">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./photos/t-1.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./photos/t-2.png" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./photos/t-3.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
