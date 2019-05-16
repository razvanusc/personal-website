import React from 'react';
import Particles from 'react-particles-js';
import './Banner.css';

const Banner = () => {
    return (
        <div>
        <div id="banner" className="section scrollspy banner">
            <div className="banner-content">
                <h1>Razvan Uscatu</h1>
                <p>Front-End Web Developer</p>
            </div>
        </div>
        <Particles
                params={{
                    "particles": {
                        "line_linked": {
                                    "color":"#FFFFFF"
                                    },
                        "number": {
                            "value": 150
                        },
                        "size": {
                            "value": 5
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
                style={{
                        width: '100%',
                        background: `#1C4885` 
                 }}
                />
                </div>
    )
}

export default Banner;