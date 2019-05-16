import React from 'react';
import './About.css';
import avatar from '../../assets/avatar.jpg';

const About = () => {
    return (
        <div id="about" className="section scrollspy about-component">
            <h1 className="title">ABOUT</h1>
            <div className="row-about">
                <div className="profile-pic-text">
                    <img src={avatar} alt="avatar" />
                    <p>
                        A young, passionate and creative Junior Front-End Web Developer who finished the Le Wagon Coding Bootcamp in Amsterdam. I am currenly working for an interesting blockchain platform called Martian Network as a Front-End Web developer, but I am open to learn about new opportunities and to work on any new projects that come along.
                </p>
                </div>
                <div className="skill-set">
                    <div>
                        <h4>Front-End</h4>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Back-End</h4>
                        <ul>
                            <li>Ruby</li>
                            <li>Ruby on Rails</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Tools</h4>
                        <ul>
                            <li>Github</li>
                            <li>Heroku</li>
                            <li>VS Code</li>
                            <li>Photoshop</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;