import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Photos = () => {
    let details=useOutletContext()
    return (
        <div style={{ maxWidth: "8rem" }} className='rounded-3 overflow-hidden '>
            <img src={details.imageUrl} alt="" />
        </div>
    );
};

export default Photos;