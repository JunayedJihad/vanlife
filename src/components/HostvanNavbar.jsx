import React from 'react';
import { NavLink } from 'react-router-dom';

const HostvanNavbar = () => {
    let style = {
      color: "#2980b9",
      textDecoration: "underline",
    };
    return (
        <div className='d-flex justify-content-around'>
            <NavLink style={({isActive})=>isActive ? style:null} end to=".">Description</NavLink>
            <NavLink style={({isActive})=>isActive ? style:null} to="pricing">Pricing</NavLink>
            <NavLink style={({isActive})=>isActive ? style:null} to="photos">Photos</NavLink>
        </div>
    );
};

export default HostvanNavbar;