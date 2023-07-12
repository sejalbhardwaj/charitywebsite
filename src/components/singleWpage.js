import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import workItemsData from './workarray.json';

const SingleWPage = () => {
  const { workId } = useParams();
  const [workItem, setWorkItem] = useState(null);

  useEffect(() => {
    // Find the specific work item based on workId from the imported JSON data
    const foundWorkItem = workItemsData.find((item) => item.id === Number(workId));
    setWorkItem(foundWorkItem);
  }, [workId]);

  return (
    <div className="single-work-page">
      {workItem ? (
        <div>
          <h2 className="work-heading">{workItem.heading}</h2>
          <div className='work-image-container' >
          <img className='work-image' src={workItem.image} alt={workItem.heading} />
          </div>
          <p className="work-description">{workItem.description}</p>
          {/* Add additional content or components for the single work item */}
        </div>
      ) : (
        <p>Loading work item...</p>
      )}
    </div>
  );
};

export default SingleWPage;