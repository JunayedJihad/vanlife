import React from 'react';
import { Link } from "react-router-dom";

const Vancard = (props) => {
    let catStyle = {
        color: "white",
        backgroundColor: props.type === "luxury" ? "#16a085":
            props.type === "rugged" ? "#f39c12":"steelblue"

    }

    return (
      <div className="van-item mb-4">
        <Link to={`${props.id}`} state={{search:props.state.search,type:props.state.type}}>
          <div className="van-img">
            <img src={props.imageUrl} alt="van" />
          </div>
          <div className="van-info">
            <div className="van-name-class">
              <div className="van-name">{props.name}</div>
              <div className="van-category px-3 py-1" style={catStyle}>
                {props.type}
              </div>
            </div>
            <div className="van-price">
              <span>${props.price}</span>/day
            </div>
          </div>
        </Link>
      </div>
    );
};

export default Vancard;