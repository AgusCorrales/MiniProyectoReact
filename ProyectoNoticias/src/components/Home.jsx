// Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home-container">
      <div className="background-image">
      </div>
      <div className="content">
        <h1>Tesla Model 3</h1>
        <div className="buttons">
          <Link to="/about">
            <button>Reserve</button>
          </Link>
          <Link to="/contact">
            <button>Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
