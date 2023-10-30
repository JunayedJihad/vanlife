import React from 'react';
import { useParams } from 'react-router-dom';

const MyVanDetails = () => {
    let param = useParams()
    
    return (
        <div className='main'>
            my vans details goes here
        </div>
    );
};

export default MyVanDetails;