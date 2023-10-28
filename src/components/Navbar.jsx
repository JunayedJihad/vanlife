import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav'>
            <Link className='home-link' to='/'>#VanLife</Link>
            <Link to='/about'>About</Link>
            <Link to='/vans'>Vans</Link>

        </div>
    );
};

export default Navbar;