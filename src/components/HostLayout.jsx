import React from 'react';
import { Outlet } from 'react-router';
import HostNavbar from './HostNavbar';

const HostLayout = () => {
    return (
        <div>
            <HostNavbar/>
            <Outlet />
        </div>
    );
};

export default HostLayout;