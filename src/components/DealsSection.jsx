import React, { useState, useEffect } from 'react';
import './DealsSection.css';

const deals = [
    {
        id: 1,
        name: 'Premium Leather Watch',
        image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=400',
        oldPrice: '250',
        newPrice: '149',
        discount: '40% OFF',
        rating: 4.8
    },
    {
        id: 2,
        name: 'Wireless Noise Cancelling Headphones',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400',
        oldPrice: '320',
        newPrice: '199',
        discount: '38% OFF',
        rating: 4.9
    },
    {
        id: 3,
        name: 'Designer Suede Handbag',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&q=80&w=400',
        oldPrice: '180',
        newPrice: '99',
        discount: '45% OFF',
        rating: 4.7
    },
    {
        id: 4,
        name: 'Performance Running Shoes',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=400',
        oldPrice: '150',
        newPrice: '89',
        discount: '40% OFF',
        rating: 4.6
    },
    {
        id: 5,
        name: 'Smart Minimalist Backpack',
        image: 'https://i.pinimg.com/736x/85/f3/f3/85f3f36f44b58a9e14c2feb4d0b8706b.jpg ',
        oldPrice: '120',
        newPrice: '69',
        discount: '42% OFF',
        rating: 4.5
    },
    {
        id: 6,
        name: 'Ultra Slim Laptop Sleeve',
        image: 'https://i.pinimg.com/736x/af/55/4f/af554fbb9de1f0ec2acbc3522f7b8b1d.jpg',
        oldPrice: '60',
        newPrice: '35',
        discount: '41% OFF',
        rating: 4.8
    }
];

const DealsSection = () => {
    const [timeLeft, setTimeLeft] = useState({
        hours: 8,
        minutes: 45,
        seconds: 12
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                let { hours, minutes, seconds } = prevTime;
                
                if (seconds > 0) {
                    seconds--;
                } else {
                    if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                    } else {
                        if (hours > 0) {
                            hours--;
                            minutes = 59;
                            seconds = 59;
                        } else {
                            clearInterval(timer);
                        }
                    }
                }
                
                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time) => time.toString().padStart(2, '0');

    return (
        <section className="deals-section container-fluid py-5">
            <div className="section-header d-flex justify-content-between align-items-end mb-4">
                <div className="header-left text-align-left">
                    <h2 className="section-title">Deals of the Day</h2>
                    <p className="section-subtitle text-muted">Handpicked favorites just for you at unbeatable prices.</p>
                </div>
                <div className="header-right d-none d-md-flex align-items-center gap-2">
                    <span className="text-muted fw-bold">Ends In: </span>
                    <div className="countdown-timer d-flex gap-2">
                        <div className="timer-box">{formatTime(timeLeft.hours)}</div>
                        <span>:</span>
                        <div className="timer-box">{formatTime(timeLeft.minutes)}</div>
                        <span>:</span>
                        <div className="timer-box">{formatTime(timeLeft.seconds)}</div>
                    </div>
                </div>
            </div>

            <div className="deals-grid">
                {deals.map((deal) => (
                    <div key={deal.id} className="deal-card">
                        <div className="deal-image-wrapper">
                            <img src={deal.image} alt={deal.name} className="deal-image" />
                            <div className="deal-badge">{deal.discount}</div>
                            <div className="deal-overlay">
                                <button className="add-to-cart-btn">Add to Bag</button>
                                <div className="deal-quick-actions">
                                    <button title="Quick View"><i className="fa-regular fa-eye"></i></button>
                                    <button title="Add to Wishlist"><i className="fa-regular fa-heart"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="deal-info p-3">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <span className="deal-rating">
                                    <i className="fa-solid fa-star text-warning me-1"></i>
                                    {deal.rating}
                                </span>
                            </div>
                            <h3 className="deal-name ">{deal.name}</h3>
                            <div className="deal-prices d-flex align-items-center gap-2">
                                <span className="new-price"><i className="fa-solid fa-indian-rupee-sign"></i>{deal.newPrice}</span>
                                <span className="old-price text-muted text-decoration-line-through"><i className="fa-solid fa-indian-rupee-sign"></i>{deal.oldPrice}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="text-center mt-5">
                <button className="view-all-deals-btn">View All Deals</button>
            </div>
        </section>
    );
};

export default DealsSection;
