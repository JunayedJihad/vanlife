import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
      <div>
        <Navbar />
        <div className="main home-hero">
          <h1>You got the travel plans,we got the travel vans</h1>
          <p className="lead">
            Add adventure to your life by joining the vanlife movement. Rent the
            perfect van to make your perfect road trip.
          </p>
          <Link className='btn btn-warning ' to="/vans">Find Your Van</Link>
        </div>
        <Footer />
      </div>
    );
};

export default Home;