import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = () => {
    return (
        <div className="auth-container">
            <div className="auth-card shadow-lg">
                <div className="auth-image">
                    <img src="https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop" alt="Login" />
                </div>
                <div className="auth-form">
                    <h2>Login</h2>
                    <p>Get access to your Orders, Wishlist and Recommendations</p>
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Enter Email/Mobile number" required />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Enter Password" required />
                        </div>
                        <p className="terms">By continuing, you agree to our <a href="/">Terms of Use</a> and <a href="/">Privacy Policy</a>.</p>
                        <button type="submit" className="auth-btn">Login</button>
                    </form>
                    <div className="auth-footer">
                        <Link to="/register">New to FIWI? Create an account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
