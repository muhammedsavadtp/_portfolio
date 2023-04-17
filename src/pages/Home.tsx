import React from 'react'
import NavBar from '../components/Navbar';
import HomeScreen from '../components/Home';
import Contact from '../components/contact/Contact';
import Portfolio from '../components/portfolio/Portfolio';
import About from '../components/about/About';

const Home = () => {
  return (
    <>
      <NavBar />
      <HomeScreen />
      <About />
      <Portfolio />
      <Contact />
    </>
  );
}

export default Home