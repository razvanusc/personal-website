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
                        A young, creative Front-end Web Developer who is passionate about coding and building websites, as well as one who strives to gain more knowledge, and excel in their job. Once finished with the Le Wagon Coding Bootcamp in Amsterdam, began to experiment with Front-End Web Development and enjoyed learning more about JavaScript and React.
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