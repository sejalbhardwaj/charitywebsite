import React, { useState } from 'react';
import Galleryimg from "./galleryimages";

const Media = () => {
  const [items] = useState(Galleryimg);
  const navigateToImage = (index) => {
    const imagePath = Galleryimg[index].image;
    const newWindow = window.open(imagePath, "_blank");
    newWindow.document.documentElement.requestFullscreen();
  };

  return (
    <section className='media'>
      <div className="Galleryimg-items container-fluid mt-5">
      <h1 style={{ textAlign: 'center' }}>Gallery</h1>
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                const { id, image } = elem;

                return (
                  <div className="media-item col-12 col-md-6 col-lg-6 col-xl-4" key={id}>
                    <div className="media-img-div col-12">
                      <img src={image} alt="..." className="d-block w-100 img-fluid"  onClick={() => navigateToImage(id - 1)} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Media;
