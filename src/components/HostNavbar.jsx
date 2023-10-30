import React from 'react';
import { NavLink } from 'react-router-dom';

const HostNavbar = () => {
    let style = {
      color: "#2980b9",
      textDecoration: "underline",
    };
    return (
        <div className='d-flex align-items-center  justify-content-around hostNav'>
            <NavLink style={({isActive})=>isActive ? style:null} end to=''>Dashboard</NavLink>
            <NavLink style={({isActive})=>isActive ? style:null} end to='my-vans'>My vans</NavLink>
            <NavLink style={({isActive})=>isActive ? style:null} to='income'>Income</NavLink>
            <NavLink style={({isActive})=>isActive ? style:null} to='review'>Review</NavLink>
        </div>
    );
};

export default HostNavbar;