import React, { useState } from "react";
import Workimage from "./workimages";

const Workmedia = () => {
  const [items] = useState(Workimage);

  const navigateToImage = (index) => {
    const imagePath = Workimage[index].image;
    const newWindow = window.open(imagePath, "_blank");
    newWindow.document.documentElement.requestFullscreen();
  };
  return (
    <div>
      <div className="Galleryimg-items container-fluid mt-5">
        <h1 style={{ textAlign: "center" }}>Our work</h1>
        <div className="row">
          <div className="col-11 mx-auto">
            <div className="row my-5">
              {items.map((elem) => {
                const { id, image } = elem;

                return (
                  <div className="item2 col-12 col-md-6 col-lg-4 col-xl-3 ">
                    <div className="img-div col-12">
                      <img
                        src={image}
                        alt="..."
                        className="d-flex w-100 img-fluid"
                        onClick={() => navigateToImage(id - 1)}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workmedia;
