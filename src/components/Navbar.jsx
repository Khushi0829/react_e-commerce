import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const categories = [
    {
        name: 'Men',
        image: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&q=80&w=150',
        subcategories: [
            { title: 'Clothing', items: ['T-Shirts', 'Shirts', 'Jeans', 'Jackets'] },
            { title: 'Footwear', items: ['Casual Shoes', 'Sports Shoes', 'Formal Shoes', 'Sandals'] },
            { title: 'Accessories', items: ['Watches', 'Belts', 'Wallets', 'Sunglasses'] },
            { title: 'Grooming', items: ['Perfumes', 'Beard Care', 'Skincare', 'Hair Care'] }
        ]
    },
    {
        name: 'Women',
        image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=150',
        subcategories: [
            { title: 'Clothing', items: ['Dresses', 'Tops', 'Skirts', 'Kurtas'] },
            { title: 'Footwear', items: ['Heels', 'Flats', 'Sneakers', 'Boots'] },
            { title: 'Accessories', items: ['Handbags', 'Jewellery', 'Scarves', 'Watches'] },
            { title: 'Beauty', items: ['Makeup', 'Skincare', 'Lipsticks', 'Nail Paint'] }
        ]
    },
    {
        name: 'Kids',
        image: 'https://i.pinimg.com/1200x/ab/1a/6e/ab1a6e09b81736d285ac8b2af883738b.jpg',
        subcategories: [
            { title: 'Boys Clothing', items: ['T-Shirts', 'Shorts', 'Shirts', 'Ethnic Wear'] },
            { title: 'Girls Clothing', items: ['Dresses', 'Tops', 'Leggings', 'Party Wear'] },
            { title: 'Footwear', items: ['Casual', 'Sports', 'School Shoes', 'Sandals'] },
            { title: 'Toys', items: ['Educational', 'Action Figures', 'Soft Toys', 'Puzzles'] }
        ]
    },
    {
        name: 'Home & Living',
        image: 'https://i.pinimg.com/736x/9e/0d/6e/9e0d6eca28dfa929fc9353b51a6cd28f.jpg',
        subcategories: [
            { title: 'Bedding', items: ['Bed Sheets', 'Blankets', 'Pillows', 'Curtains'] },
            { title: 'Decor', items: ['Wall Art', 'Clocks', 'Vases', 'Candles'] },
            { title: 'Kitchen', items: ['Cookware', 'Dinnerware', 'Tools', 'Storage'] },
            { title: 'Bath', items: ['Towels', 'Mats', 'Accessories', 'Robes'] }
        ]
    },
    {
        name: 'Beauty',
        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=150',
        subcategories: [
            { title: 'Makeup', items: ['Lipstick', 'Mascara', 'Foundation'] },
            { title: 'Skincare', items: ['Moisturizer', 'Serum', 'Sunscreen'] }
        ]
    },
    {
        name: 'Sports',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=150',
        subcategories: [
            { title: 'Activewear', items: ['Shorts', 'T-Shirts', 'Yoga Pants'] },
            { title: 'Equipment', items: ['Dumbbells', 'Yoga Mats', 'Rackets'] }
        ]
    }
];

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileCategory, setActiveMobileCategory] = useState(null);
    const [activeMobileSubCategory, setActiveMobileSubCategory] = useState(null);
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isDesktopSearchActive, setIsDesktopSearchActive] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setActiveMobileCategory(null);
        setActiveMobileSubCategory(null);
    };

    const toggleMobileCategory = (index) => {
        setActiveMobileCategory(activeMobileCategory === index ? null : index);
        setActiveMobileSubCategory(null);
    };

    const toggleMobileSubCategory = (index) => {
        setActiveMobileSubCategory(activeMobileSubCategory === index ? null : index);
    };

    return (
        <header className="site-header">
            <nav className="navbar-container">
                <button className="mobile-toggler" onClick={toggleMobileMenu}>
                    <i className="fa-solid fa-bars-staggered"></i>
                </button>

                <div className="logo">
                    <Link to="/" className="text-decoration-none">
                        <h2>FIWI<span>STORE</span></h2>
                    </Link>
                </div>

                <ul className="nav-links">
                    {categories.slice(0, 4).map((category, index) => (
                        <li key={index} className="nav-item">
                            <Link to={`/${category.name.toLowerCase()}`} className="nav-link">
                                {category.name}
                            </Link>
                            <div className="mega-menu">
                                {category.subcategories.map((sub, idx) => (
                                    <div key={idx} className="mega-menu-column">
                                        <h4>{sub.title}</h4>
                                        <ul className="mega-menu-links">
                                            {sub.items.map((item, i) => (
                                                <li key={i}><Link to="/">{item}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}
                    <li className="nav-item">
                        <Link to="/shop" className="nav-link">Shop</Link>
                    </li>
                </ul>

                <div className="nav-icons-container">
                    <ul className="nav-icons">
                        <li className="d-none d-md-block search-wrapper-desktop">
                            <div className={`desktop-search-container ${isDesktopSearchActive ? 'active' : ''}`}>
                                <input 
                                    type="text" 
                                    placeholder="Search products..." 
                                    className="desktop-search-input"
                                    autoFocus={isDesktopSearchActive}
                                />
                                <button 
                                    className="desktop-search-toggle" 
                                    onClick={() => setIsDesktopSearchActive(!isDesktopSearchActive)}
                                >
                                    {isDesktopSearchActive ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-magnifying-glass"></i>}
                                </button>
                            </div>
                        </li>
                        <li className="d-none d-md-block user-dropdown-container">
                            <i className="fa-solid fa-user"></i>
                            <div className="user-dropdown">
                                <h3>Welcome</h3>
                                <p>To access account and manage orders</p>
                                <div className="dropdown-btns">
                                    <Link to="/login" className="login-btn">Login / Signup</Link>
                                </div>
                                <hr />
                                <ul className="dropdown-links">
                                    <li><Link to="/account">My Account</Link></li>
                                    <li><Link to="/orders">Orders</Link></li>
                                    <li><Link to="/contact">Contact Us</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link to="/wishlist"><i className="fa-regular fa-heart"></i></Link>
                        </li>
                        <li className="cart-icon">
                            <Link to="/cart">
                                <i className="fa-solid fa-bag-shopping"></i>
                                <span className="cart-count">3</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Mobile Search & Categories Strip */}
            <div className="mobile-search-strip d-md-none">
                <div className={`search-action-container ${isSearchActive ? 'search-active' : ''}`}>
                    <div className="search-toggle-btn" onClick={() => setIsSearchActive(!isSearchActive)}>
                        {isSearchActive ? <i className="fa-solid fa-arrow-left"></i> : <i className="fa-solid fa-magnifying-glass"></i>}
                    </div>
                    
                    {isSearchActive ? (
                        <div className="search-input-wrapper">
                            <input type="text" placeholder="Search for products, brands..." autoFocus />
                        </div>
                    ) : (
                        <div className="horizontal-categories-scroll">
                            {categories.map((category, index) => (
                                <div key={index} className="scroll-cat-item">
                                    <div className="cat-image-circle">
                                        <img src={category.image} alt={category.name} />
                                    </div>
                                    <span>{category.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Drawer */}
            <div className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}></div>
            <div className={`mobile-drawer ${isMobileMenuOpen ? 'active' : ''}`}>
                <div className="drawer-header">
                    <div className="logo">
                        <h2>FIWI<span>STORE</span></h2>
                    </div>
                    <button className="close-btn" onClick={toggleMobileMenu}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <ul className="mobile-nav-links">
                    {categories.map((category, index) => (
                        <li key={index} className="mobile-nav-item">
                            <div className="mobile-nav-link-wrapper" onClick={() => toggleMobileCategory(index)}>
                                <span className="mobile-nav-link">{category.name}</span>
                                <i className={`fa-solid fa-chevron-down transition-transform ${activeMobileCategory === index ? 'rotate-180' : ''}`}></i>
                            </div>
                            
                            <div className={`mobile-submenu ${activeMobileCategory === index ? 'active' : ''}`}>
                                {category.subcategories.map((sub, idx) => (
                                    <div key={idx} className="mobile-submenu-section">
                                        <div className="mobile-submenu-header" onClick={() => toggleMobileSubCategory(`${index}-${idx}`)}>
                                            <h5>{sub.title}</h5>
                                            <i className={`fa-solid fa-chevron-down small transition-transform ${activeMobileSubCategory === `${index}-${idx}` ? 'rotate-180' : ''}`}></i>
                                        </div>
                                        
                                        <ul className={`mobile-mega-mega-menu ${activeMobileSubCategory === `${index}-${idx}` ? 'active' : ''}`}>
                                            {sub.items.map((item, i) => (
                                                <li key={i}><Link to="/" onClick={toggleMobileMenu}>{item}</Link></li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}
                    <li className="mobile-nav-item">
                        <Link to="/shop" className="mobile-nav-link" onClick={toggleMobileMenu}>
                            Shop
                        </Link>
                    </li>
                </ul>
                
                <div className="mt-auto pt-4 border-top mobile-drawer-footer">
                    <div className="d-flex justify-content-around">
                         <Link to="/account" onClick={toggleMobileMenu} className="text-dark d-flex flex-column align-items-center gap-1 text-decoration-none">
                            <i className="fa-solid fa-user fs-5"></i>
                            <span style={{fontSize: '10px'}}>Account</span>
                         </Link>
                         <Link to="/wishlist" onClick={toggleMobileMenu} className="text-dark d-flex flex-column align-items-center gap-1 text-decoration-none">
                            <i className="fa-regular fa-heart fs-5"></i>
                            <span style={{fontSize: '10px'}}>Wishlist</span>
                         </Link>
                         <Link to="/cart" onClick={toggleMobileMenu} className="text-dark d-flex flex-column align-items-center gap-1 text-decoration-none">
                            <i className="fa-solid fa-bag-shopping fs-5"></i>
                            <span style={{fontSize: '10px'}}>Cart</span>
                         </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;

