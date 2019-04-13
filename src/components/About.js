import React from 'react';
import './About.css';
import avatar from '../assets/avatar.jpg';

export default function About() {
    return (
        <div className="about-component">
            <h1>ABOUT</h1>
            <img src={avatar} />
            <p>
                A young, passionate and creative Junior Front-End Web Developer who finished the Le Wagon Coding Bootcamp in Amsterdam. I am currenly working for an interesting blockchain platform called Martian Network as a Front-End Web developer, but I am open to learn about new opportunities and to work on any new projects that come along.
            </p>
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
                        <li>Node</li>
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
    )
}