import React from 'react';
import { Link, useLoaderData, useLocation, useParams } from 'react-router-dom';
import { getVans } from '../components/api';

export async function loader({params}){
  return getVans(`/api/vans/${params.id}`)
}

const Vandetails = (props) => {

  const location=useLocation()
  // console.log(location);
  const data=useLoaderData()

  const search=location.state && `?${location.state.search}`||''
  const type=location.state && location.state.type||'all'
  // console.log(type);

    function ToVanPage() {
        return (
          <Link to={`..${search}`} relative='path' className="back-vans py-2 ms-2">
            <i className="fa-regular fa-circle-left"></i>
            <span className="ms-2 fw-light">Back to {type} vans</span>
          </Link>
        );
  }

  let catStyle = {
    color: "white",
    backgroundColor:data &&
      (data.type === "luxury"
        ? "#16a085"
        : data.type === "rugged"
        ? "#f39c12"
        : "steelblue"),
  }

   return (
     <div>
       {data && (
         <div className="main">
           <ToVanPage />
           <div>
             <img src={data.imageUrl} alt="" className="mb-3 busdetails-img" />
             <span
               className="busdetails-type mb-3 px-4 py-1 rounded-1 "
               style={catStyle}
             >
               {data.type}
             </span>
             <h5 className="busdetails-name">{data.name}</h5>
             <h6 className="">
               <span className="fw-bold busdetails-price">{data.price}$</span>
               /day
             </h6>
             <p className="busdetails-details my-4 ">{data.description}</p>
             <Link className="btn btn-warning rent-btn" to="/">
               Rent this van
             </Link>
           </div>
         </div>
       ) }
     </div>
   );



};










export default Vandetails;