import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import avatar from '../assets/images/avatar.png';
import './HomePage.css'; 

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Левая часть экрана */}
      <motion.div
        className="left-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="title"><strong>Do what you love - freedom </strong>
          <br></br>Loving what you do is "happiness"</h1>
       
        <p className="description">Frontend-developer and UX/UI designer</p>
        <p className="description-2">My eyes see the eyes of the developer and the eyes of users</p>
        <button onClick={() => navigate('/portfolio')} className="portfolio-button">Portfolio</button>
      </motion.div>
      {/* Правая часть экрана */}
      <motion.div
        className="right-section"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <img src={avatar} alt="Avatar" className="avatar" />
      </motion.div>
    </div>
  );
}

export default HomePage;
