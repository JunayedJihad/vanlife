import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HostVanInfo = () => {
  let details = useOutletContext();
    return (
      <div className="full-info">
        <p>
          <span className="fw-bold ">Name:</span>
          {` ${details.name}`}
        </p>
        <p className="text-capitalize">
          <span className="fw-bold ">Category:</span>
          {` ${details.type}`}
        </p>
        <p>
          <span className="fw-bold ">Description:</span>
          {` ${details.description}`}
        </p>
        <p>
          <span className="fw-bold ">Visibility:</span>{` Public`}
        </p>
      </div>
    );
};

export default HostVanInfo;