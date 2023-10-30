import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';

const MyVanDetails = () => {

    const[details,setDetails] =useState()
    let { id } = useParams()

    useEffect(() => {
        fetch(`/api/host/vans/${id}`)
          .then((response) => response.json())
          .then((response) => setDetails(response.vans));
    }, [id])

     let catStyle = {
       color: "white",
       backgroundColor:
         details &&
         (details.type === "luxury"
           ? "#16a085"
           : details.type === "rugged"
           ? "#f39c12"
           : "steelblue"),
     };

      let style = {
        color: "#2980b9",
        textDecoration: "underline",
      };


    return (
      <div className="main">
        {details && (
          <div className="div">
            <div className="short-info shadow-lg p-3 rounded-3  d-flex align-items-center gap-4">
              <div className="short-img">
                <img src={details.imageUrl} alt="" />
              </div>
              <div className="short-desc d-flex gap-1 flex-column ">
                <span
                  className="text-capitalize px-4 py-1 rounded-1"
                  style={catStyle}
                >
                  {details.type}
                </span>
                <span>{details.name}</span>
                <span>${details.price}/Day</span>
              </div>
            </div>
            <div className="hostvan-submenu d-flex justify-content-around my-4">
              <NavLink style={({isActive})=>isActive ? style:null} to="">Description</NavLink>
              <NavLink style={({isActive})=>isActive ? style:null} to="pricing">Pricing</NavLink>
              <NavLink style={({isActive})=>isActive ? style:null} to="photos">Photos</NavLink>
            </div>
            <div className="full-info">
              <p>
                <span className="fw-bold ">Name:</span>
                {details.name}
              </p>
              <p className="text-capitalize">
                <span className="fw-bold ">Category:</span>
                {details.type}
              </p>
              <p>
                <span className="fw-bold ">Description:</span>
                {details.description}
              </p>
              <p>
                <span className="fw-bold ">Visibility:</span>Public
              </p>
            </div>
          </div>
        )}
      </div>
    );
};

export default MyVanDetails;