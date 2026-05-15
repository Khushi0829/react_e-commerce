import React, { useState, useEffect, useCallback } from 'react';
import './HeroSlider.css';

const slides = [
    {
        id: 1,
        image: 'https://i.pinimg.com/736x/4f/9d/51/4f9d5155305b8605ada76cb3ed6ea7dc.jpg ',
        title: 'SUMMER VIBES',
        subtitle: 'UP TO 50% OFF',
        description: 'Discover the latest trends in summer fashion. Stay cool, stay stylish.',
        cta: 'Shop Now',
        color: '#f3f4f6'
    },
    {
        id: 2,
        image: ' https://i.pinimg.com/736x/17/44/58/174458320f70c88d11f38a4ab39e30db.jpg',
        title: 'NEW COLLECTION',
        subtitle: 'AUTUMN ARRIVALS',
        description: 'Explore our handpicked collection for the upcoming season.',
        cta: 'Explore More',
        color: '#e5e7eb'
    },
    {
        id: 3,
        image: ' https://i.pinimg.com/1200x/24/5b/36/245b36982c3b71daf57afe33f77e8819.jpg ',
        title: 'LUXURY ESSENTIALS',
        subtitle: 'PREMIUM QUALITY',
        description: 'Elevate your wardrobe with our premium luxury essentials.',
        cta: 'View Collection',
        color: '#f9fafb'
    }
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [nextSlide]);

    return (
        <section className="hero-slider">
            <div className="slider-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide) => (
                    <div key={slide.id} className="slide-item">
                        <div className="slide-image-container">
                            <img src={slide.image} alt={slide.title} className="slide-image" />
                            <div className="slide-overlay"></div>
                        </div>
                        <div className="slide-content">
                            <div className="container">
                                <div className="content-inner">
                                    <span className="slide-subtitle">{slide.subtitle}</span>
                                    <h1 className="slide-title">{slide.title}</h1>
                                    <p className="slide-description">{slide.description}</p>
                                    <div className="slide-actions">
                                        <button className="btn-primary">{slide.cta}</button>
                                        <button className="btn-outline">Wishlist</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button className="slider-nav prev" onClick={prevSlide}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button className="slider-nav next" onClick={nextSlide}>
                <i className="fa-solid fa-chevron-right"></i>
            </button>

            {/* Dots */}
            <div className="slider-dots">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${currentSlide === index ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;
