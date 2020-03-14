import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div className="header ">
            <div className="container logo">
                <h1>Friends</h1>
            </div>
            <div className=" nav-bg">
                <nav className="container">
                    <a href="/all">All</a>
                    <a href="/best">Best</a>
                    <a href="/school">School</a>
                    <a href="/collage">Collage</a>
                    <a href="/univercity">Univercity</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;