import React from "react";
import { useParams } from "react-router-dom";
import workItemsData from "./json files/workarray.json";

const SingleWPage = () => {
  const { workId } = useParams();
  const workItem = workItemsData.find((item) => item.id === Number(workId));
  return (
    <div className="single-work-page">
      {workItem ? (
        <div>
          <h2 className="work-heading">{workItem.heading}</h2>
          <div className="work-image-container">
            <img
              className="work-image"
              src={workItem.image}
              alt={workItem.heading}
            />
          </div>
          <p className="work-description">{workItem.description}</p>
        </div>
      ) : (
        <p>Loading work item...</p>
      )}
    </div>
  );
};

export default SingleWPage;
