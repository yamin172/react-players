import React from 'react';
import logo from '../../Images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <nav className="navbar-item">
                <div className="nav-logo">
                    <img src={logo} alt="logo png" />
                </div>
                <div className="nav-link">
                    <a href="/news">news</a>
                    <a href="/match center">match center</a>
                    <a href="/fixtures">fixtures</a>
                    <a href="/tickets">tickets</a>
                    <a href="/team">team</a>
                    <a href="/club">club</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;