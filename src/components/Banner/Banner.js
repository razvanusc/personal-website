import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './Banner.css';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import Cv from '../../assets/pdf/resume.pdf'

class Banner extends Component {
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.scrollspy');
            M.ScrollSpy.init(elems, { scrollOffset: 70 });
        });
    }

    render() {
        return (
            <div id="banner" className=" section scrollspy banner-container">
                <div className="banner">
                    <div className="banner-content">
                        <h1>Razvan Uscatu</h1>
                        <p>Front-End Web Developer</p>
                        <a href="#portofolio">View my work</a>
                        <a href={Cv} target="_blank">View my CV</a>
                    </div>
                </div>
                <div className="mobile-banner"></div>
                <Particles
                    params={{
                        "particles": {
                            "line_linked": {
                                "color": "#FFFFFF"
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
}

export default Banner;