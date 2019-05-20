import React from 'react';
import './About.css';
import avatar from '../../assets/img/avatar.jpg';

const About = () => {
    const Icon = () => (
        <svg height="100" width="45">
            <line x1="" y1="0" x2="70" y2="0" className="inline-svg" />
        </svg>
    );

    return (
        <div id="about" className="section scrollspy about-component">
            <h1 className="title">ABOUT</h1>
            <div className="svg"><Icon /></div>
            <div className="about-info">
                <div className="profile-pic-text">
                    <img src={avatar} alt="avatar" />
                    <p>
                    I am a creative and determined Front-end Web Developer who is passionate about coding and building websites, as well as one who strives to gain more knowledge, and excel in their job. Once I finished with the Le Wagon Coding Bootcamp in Amsterdam, I began experimenting with Front-End Web Development and enjoyed learning more about JavaScript and React. I now work as a part-time Front-end Web Developer for an interesting blockchain company based in Amsterdam, called Martian Network, and looking for a full-time job in the field.
                    </p>
                </div>
                <div className="skill-set">
                    <div className="front-end">
                        <h4>Front-End</h4>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div className="back-end">
                        <h4>Back-End</h4>
                        <ul>
                            <li>Ruby</li>
                            <li>Ruby on Rails</li>
                            <li>Node.js</li>
                        </ul>
                    </div>
                    <div className="tools">
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