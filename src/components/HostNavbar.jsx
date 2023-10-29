import React from 'react';
import { Link } from 'react-router-dom';

const HostNavbar = () => {
    return (
        <div className='d-flex align-items-center  justify-content-around hostNav'>
            <Link to=''>Dashboard</Link>
            <Link to='income'>Income</Link>
            <Link to='review'>Review</Link>
        </div>
    );
};

export default HostNavbar;