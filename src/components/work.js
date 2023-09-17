import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import workImagesData from "./json files/workarray.json";

const WorkPage = () => {
  const [workImages, setWorkImages] = useState([]);

  useEffect(() => {
    setWorkImages(workImagesData);
  }, []);

  return (
    <div>
      <div className="Galleryimg-items container-fluid mt-5">
        <h1 style={{ textAlign: "center" }}>Our work</h1>
        <div className="row">
          {workImages.map((work) => (
            <div className="item2 col-lg-6" key={work.id}>
              <div className="img-div col-4">
                <img
                  src={work.image}
                  alt={work.heading}
                  className="d-flex  img-fluid"
                />
              </div>
              <div className="details  col-lg-6">
                <span>
                  <h2>{work.heading}</h2> <br />
                  <Link to={`/work/${work.id}`}>Read More</Link>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
