import React from 'react';
import { NavLink } from 'react-router-dom';

const Myvans = () => {
    const [vanData, setVanData] = React.useState()

    React.useEffect(() => {
        fetch('/api/host/vans')
            .then((response) => response.json())
            .then(response=>setVanData(response.vans))
    }, [])

    let vanElements
    if (vanData) {
        vanElements = vanData.map((item) => (
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
    }
    return (
      <div className="main">
        {vanData ? (
          <div className="div">
            <p className="display-6">My listed Vans</p>
            <div className="card-container">{vanElements}</div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
};

export default Myvans;