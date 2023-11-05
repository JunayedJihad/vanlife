import React, { useEffect, useState } from "react";
import { useParams, NavLink, Outlet, useLoaderData } from "react-router-dom";
import HostvanNavbar from "../components/HostvanNavbar";
import HostVanInfo from "../components/HostVanInfo";
import { getVans } from "../components/api";
import { requireAuth } from "../components/util";

// Direct use params() hook use kora jabe na,only component er vitor use kora jay....................

export async function loader({ params,request }) {
  await requireAuth(request)
  return getVans(`/api/host/vans/${params.id}`);
}

const MyVanDetails = () => {
  const details = useLoaderData();

  let catStyle = {
    color: "white",
    backgroundColor:
      details.type === "luxury"
        ? "#16a085"
        : details.type === "rugged"
        ? "#f39c12"
        : "steelblue",
  };

  let style = {
    color: "#2980b9",
    textDecoration: "underline",
  };

  return (
    <div className="main">
      <div className="div">
        <NavLink to=".." relative="path" className="back mb-3">
          <i className="fa-regular fa-circle-left"></i>
          <span className="ms-2">Back to all Vans</span>
        </NavLink>
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
            <span>
              <span className="fw-bold ">{details.price}$</span>/Day
            </span>
          </div>
        </div>
        <div className="hostvan-submenu my-4">{<HostvanNavbar />}</div>
        <Outlet context={details} />
      </div>
    </div>
  );
};

export default MyVanDetails;
