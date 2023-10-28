import React from 'react';
import Vancard from '../components/Vancard';


const Vans = () => {

    const [data, setData] = React.useState()
    React.useEffect(() => {
      fetch("/api/vans")
        .then((response) => response.json())
        .then((res) => setData(res.vans));
    }, []);

  let vanElements=''
  if (data) {
        vanElements = data.map((item) => (
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
        <div className="vancard-container mt-4">{ vanElements}</div>
      </div>):<p>Loading...</p>
        }
      </div>
    );
};

export default Vans;
