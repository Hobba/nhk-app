import React from 'react';
import logo from '../../logo.png';
import './Home.css';
import '../../App.css'

const Home = () => {
    return (
        <div className="page">
            <div className="greeting">
                <h2>
                    Herzlich Willkommen auf der Nerdhalbkugel
                </h2>
            </div>
            <img src={logo} className="home-logo"/>
        </div>
    );
};

export default Home;