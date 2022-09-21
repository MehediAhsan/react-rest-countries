import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav>
                <div className="title">
                    <h3>Country</h3>
                </div>
                <div className="menu">
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>                         
                </div>
            </nav>
        </div>
    );
};

export default Header;