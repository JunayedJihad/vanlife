import React from 'react';
import Vancard from '../components/Vancard';
import { useSearchParams, NavLink } from 'react-router-dom';


const Vans = () => {

  const [data, setData] = React.useState()
  const[searchParams,setSearchParams]=useSearchParams()
  const typeFilter=searchParams.get('type')


    React.useEffect(() => {
      fetch("/api/vans")
        .then((response) => response.json())
        .then((res) => setData(res.vans));

    }, []);


    let vanElements=''
    if (data) {
      let displayedElements=typeFilter?data.filter(item => (item.type===typeFilter)):data
      vanElements = displayedElements.map((item) => (
        <Vancard
          id={item.id}
          key={item.id}
          name={item.name}
          type={item.type}
          price={item.price}
          imageUrl={item.imageUrl}
        />
      ));
    }

    return (
      <div className="main">
        {data ?
          ( <div className=''>
        <h1 className='display-6 '>Explore our van options</h1>
        <div className="search-section my-4 d-flex justify-content-around ">
          {/* <NavLink className="px-2 py-1 rounded-2 bg-warning-subtle " to='?type=simple'>Simple</NavLink>
          <NavLink className="px-2 py-1 rounded-2 bg-warning-subtle " to='?type=luxury'>Luxury</NavLink>
          <NavLink className="px-2 py-1 rounded-2 bg-warning-subtle " to='?type=rugged'>Rugged</NavLink>
          <NavLink className="px-2 py-1 rounded-2 bg-warning-subtle " to='.'>Clear filters</NavLink> */}
          <button className='btn btn-outline-warning py-1' onClick={()=>setSearchParams({type:"simple"})}>Simple</button>
          <button className='btn btn-outline-warning py-1' onClick={()=>setSearchParams({type:"rugged"})}>Rugged</button>
          <button className='btn btn-outline-warning py-1' onClick={()=>setSearchParams({type:"luxury"})}>Luxury</button>
          <button className='btn btn-outline-warning py-1' onClick={()=>setSearchParams({})}>Clear Filter</button>
        </div>
        <div className="vancard-container mt-4">{ vanElements}</div>
      </div>):<p>Loading...</p>
        }
      </div>
    );
};

export default Vans;
