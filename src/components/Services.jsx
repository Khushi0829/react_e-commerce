import React from 'react';
import './Services.css';

const services = [
    {
        id: 1,
        icon: 'fa-solid fa-truck-fast',
        title: 'Free Shipping',
        description: 'Free shipping on all orders above ₹499'
    },
    {
        id: 2,
        icon: 'fa-solid fa-headset',
        title: 'Support 24/7',
        description: 'Dedicated support for all your queries'
    },
    {
        id: 3,
        icon: 'fa-solid fa-arrow-rotate-left',
        title: 'Money Return',
        description: 'Easy 30-day money back guarantee'
    },
    {
        id: 4,
        icon: 'fa-solid fa-tags',
        title: 'Order Discount',
        description: 'Flat 10% off on your first order'
    }
];

const Services = () => {
    return (
        <section className="services-section py-5">
            <div className="container">
                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-item">
                            <div className="service-icon">
                                <i className={service.icon}></i>
                            </div>
                            <div className="service-content">
                                <h3 className="service-title">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
