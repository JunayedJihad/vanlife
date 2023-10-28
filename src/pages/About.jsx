import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const About = () => {
    return (
      <div>
        <Navbar />
        <div className="">
          <img src="../../public/about-hero.png" alt="" />
          <div className="about-body p-4">
            <h1>Don't squeeze in a sedan when you could relax in a van</h1>
            <p>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>

            <div className="about-bottom p-5 mt-5">
              <h2>
                Your destination is waiting.
                <br />
                Your van is ready.
                </h2>
                <Link className='btn btn-dark mt-3  ' to='/vans'>Explore our vans</Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
};

export default About;