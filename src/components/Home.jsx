import React from 'react';
import Card from './Card';
import Navbar from '../Navbar';

const Home = ({ data }) => {
  // Ensure data is defined and an array before mapping
  return (
    <div>
      <h1>Home</h1>
      <Navbar />
      {
        data.map(({ image, description, title, price, id }) => (
          <Card key={id} img={image} title={title} desc={description} price={price} />
        ))
      }
    </div>
  );
}

export default Home;


