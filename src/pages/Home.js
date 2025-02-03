import React from 'react';
import AuthButton from '../components/AuthButton';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <h1 className="fade-in">Secure & Seamless Authentication</h1>
        <p className="fade-in delay">
          Experience hassle-free authentication with <strong>Azure AD B2C</strong>.
        </p>
        <AuthButton />
      </div>
    </div>
  );
};

export default Home;
