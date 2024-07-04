import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import PopularDestinations from './components/PopularDestinations';
import Offers from './components/Offers';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PopularDestinations />
      <Offers />
    </div>
  );
}

export default App;
