import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import BoldApproaches from './components/BoldApproaches';
import Sustaining from './components/Sustaining';
import Platform from './components/Platform';
import LatestAtEgov from './components/LatestAtEgov';
import Supporters from './components/Supporters';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Stats />
        <BoldApproaches />
        <Sustaining />
        <Platform />
        <LatestAtEgov />
        <Supporters />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
