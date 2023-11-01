import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
     return (
          <div className='main d-flex justify-content-center align-items-center '>
              <div>
               <p style={{fontSize:'4rem',fontWeight:'bolder'}}>404 Error 😓 </p>
               <NavLink to=".." className='btn btn-dark' style={{width:'100%'}}>Back to Home</NavLink>
              </div>
          </div>
     );
};

export default Error;