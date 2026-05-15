import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Register = () => {
    return (
        <div className="auth-container">
            <div className="auth-card shadow-lg">
                <div className="auth-image">
                    <img src="https://i1-c.pinimg.com/1200x/e3/e2/b8/e3e2b8761b75dd9e222760ca07fc44ef.jpg" alt="Register" />
                </div>
                <div className="auth-form">
                    <h2>Signup</h2>
                    <p>We do not share your personal details with anyone.</p>
                    <form>
                        <div className="form-group">
                            <input type="text" placeholder="Enter Full Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Enter Email" required />
                        </div>
                        <div className="form-group">
                            <input type="tel" placeholder="Enter Mobile number" required />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Set Password" required />
                        </div>
                        <button type="submit" className="auth-btn">CONTINUE</button>
                    </form>
                    <div className="auth-footer">
                        <Link to="/login" className="existing-user-btn">Existing User? Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
