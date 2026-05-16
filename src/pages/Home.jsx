import React from 'react';
// import Navbar from '../components/Navbar';
import HeroSlider from '../components/HeroSlider';
import DealsSection from '../components/DealsSection';
import Services from '../components/Services';
import Categories from '../components/Categories';
// import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <HeroSlider />
            <DealsSection />
            <Services />
            <Categories />
        </>
    );
};

export default Home;
