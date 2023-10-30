import React from 'react';
import { Outlet } from 'react-router-dom';

const MyvanLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default MyvanLayout;