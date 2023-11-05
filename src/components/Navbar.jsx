import React from 'react';
import { NavLink } from 'react-router-dom';
import imageLink from '../assets/avatar-icon.png'

const Navbar = () => {
    const loginStatus=localStorage.getItem('isLoggedIn')
    let style = {
        color: "#2980b9",
        textDecoration: "underline",
    };
    return (
        <div className='nav'>
            <NavLink className='home-link' to='/'>#VanLife</NavLink>
            <NavLink style={({isActive})=>isActive ? style:null} to='host'>Host</NavLink>
            <NavLink style={({isActive})=>isActive ? style:null} to='about'>About</NavLink>
            <NavLink style={({isActive})=>isActive ? style:null} to='vans'>Vans</NavLink>
            {/* {loginStatus?(
                <button className='btn btn-outline-danger px-2 py-1' onClick={()=>{localStorage.removeItem('isLoggedIn')}}>Log Out</button>
            ):(
                <NavLink style={{width:'1.3rem'}} to='login'><img src={imageLink} /></NavLink>
            )} */}
            <NavLink style={{width:'1.3rem'}} to='login'><img src={imageLink} /></NavLink>
            <button className='btn btn-outline-danger px-2 py-1' onClick={()=>{localStorage.removeItem('isLoggedIn')}}>Log Out</button>
        </div>
    );
};

export default Navbar;
