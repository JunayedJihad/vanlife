import React from 'react';
import Vancard from '../components/Vancard';
import { useSearchParams, NavLink } from 'react-router-dom';


const Vans = () => {

  const [data, setData] = React.useState()
  const[searchParams,setSearchParams]=useSearchParams()
  const typeFilter=searchParams.get('type')

  let selected={
    backgroundColor:"black",
    color:"white",
  }

  function handleFiltering(key,value){
    setSearchParams(prev=>{
      value===null?
        prev.delete(key):
        prev.set(key,value)
        return prev
    })
  }


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
          state={{search:searchParams.toString(),type:typeFilter}}
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
          <button style={typeFilter==="simple" ? selected:null} className='btn btn-outline-warning py-1' onClick={()=>handleFiltering('type','simple')}>Simple</button>
          <button style={typeFilter==="rugged" ? selected:null} className='btn btn-outline-warning py-1' onClick={()=>handleFiltering('type','rugged')}>Rugged</button>
          <button style={typeFilter==="luxury" ? selected:null} className='btn btn-outline-warning py-1' onClick={()=>handleFiltering('type','luxury')}>Luxury</button>
          {typeFilter && <button className='btn text-decoration-underline text-danger py-1' onClick={()=>handleFiltering('type',null)}>Clear Filter</button>}
        </div>
        <div className="vancard-container mt-4">{ vanElements}</div>
      </div>):<p>Loading...</p>
        }
      </div>
    );
};

export default Vans;
