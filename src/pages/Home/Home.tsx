import React from 'react';
import logo from '../../logo.png';
import './Home.css';
import '../../App.css'

const Home = () => {
    return (
        <body className="body">
        <div className="greeting">
            <h2>
                Herzlich Willkommen auf der Nerdhalbkugel
            </h2>
        </div>
        <img src={logo} className="home-logo"/>
        </body>
    );
};

export default Home;