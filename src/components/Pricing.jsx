import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Pricing = () => {
    let details = useOutletContext();
    return (
        <div>
            <p><span style={{fontSize:"2rem"}} className='fw-bold '>{details.price}$</span>/Day</p>
        </div>
    );
};

export default Pricing;