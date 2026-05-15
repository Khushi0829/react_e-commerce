import React from 'react';
// import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import DealsSection from '../components/DealsSection';
import Services from '../components/Services';
// import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <HeroSlider />
            <DealsSection />
            <Services />
        </>
    );
};

export default Home;
