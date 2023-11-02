import React from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { getVans } from "./api";
import { requireAuth } from "./util";

export async function loader({ params }) {
  await requireAuth()
  return getVans(`/api/host/vans`);
}

const Myvans = () => {
  const vanData = useLoaderData();

  let vanElements = vanData.map((item) => (
    <NavLink to={`${item.id}`} key={item.id}>
      <div className="van-card mb-3 p-2  d-flex gap-4  align-items-center ">
        <div className="vancard-img">
          <img src={item.imageUrl} alt="" />
        </div>
        <div className="vancard-info">
          <p className="mb-1">{item.name}</p>
          <p>${item.price}/day</p>
        </div>
      </div>
    </NavLink>
  ));

  return (
    <div className="main">
      <div className="div">
        <p className="display-6">My listed Vans</p>
        <div className="card-container">{vanElements}</div>
      </div>
    </div>
  );
};

export default Myvans;
