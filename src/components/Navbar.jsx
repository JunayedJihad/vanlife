import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    let style = {
        color: "#2980b9",
        textDecoration: "underline",
    };
    return (
        <div className='nav'>
            <NavLink className='home-link' to='/'>#VanLife</NavLink>
            <NavLink style={({isActive})=>isActive ? style:null} to='/host'>Host</NavLink>
            <NavLink style={({isActive})=>isActive ? style:null} to='/about'>About</NavLink>
            <NavLink style={({isActive})=>isActive ? style:null} to='/vans'>Vans</NavLink>

        </div>
    );
};

export default Navbar;