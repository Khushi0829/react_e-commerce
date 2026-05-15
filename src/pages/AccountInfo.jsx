import React from 'react';
import './AccountInfo.css';

const AccountInfo = () => {
    const user = {
        name: 'Khushi',
        email: 'khushi@example.com',
        phone: '+91 9876543210',
        address: '123, Luxury Street, Mumbai, India',
        memberSince: 'May 2026'
    };

    return (
        <div className="account-container container py-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="account-sidebar p-4 rounded shadow-sm">
                        <div className="profile-section text-center mb-4">
                            <div className="profile-image mb-3">
                                <i className="fa-solid fa-user-circle"></i>
                            </div>
                            <h3>Hello, {user.name}</h3>
                            <p className="text-muted">Member since {user.memberSince}</p>
                        </div>
                        <ul className="account-menu">
                            <li className="active"><i className="fa-solid fa-user"></i> Profile Information</li>
                            <li><i className="fa-solid fa-box"></i> My Orders</li>
                            <li><i className="fa-solid fa-heart"></i> Wishlist</li>
                            <li><i className="fa-solid fa-location-dot"></i> Manage Addresses</li>
                            <li><i className="fa-solid fa-credit-card"></i> Saved Cards</li>
                            <li className="text-danger"><i className="fa-solid fa-right-from-bracket"></i> Logout</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="account-content p-4 rounded shadow-sm bg-white">
                        <h2 className="mb-4">Account Information</h2>
                        <div className="info-grid">
                            <div className="info-item">
                                <label>Full Name</label>
                                <div className="info-value">{user.name}</div>
                            </div>
                            <div className="info-item">
                                <label>Email Address</label>
                                <div className="info-value">{user.email}</div>
                            </div>
                            <div className="info-item">
                                <label>Phone Number</label>
                                <div className="info-value">{user.phone}</div>
                            </div>
                            <div className="info-item">
                                <label>Default Address</label>
                                <div className="info-value">{user.address}</div>
                            </div>
                        </div>
                        <button className="edit-btn mt-4">Edit Profile</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountInfo;
