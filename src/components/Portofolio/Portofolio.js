import React, { Component } from 'react';
import './Portofolio.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Portofolio extends Component {
    state = {
        projects: [
            {
                id: 0, name: "Diabetes Logs (Latest project)", about: "A tool created for people with diabetes, allowing them to keep track of their blood sugar levels, as well as the medication they take. It uses Firestore to store data on the backend and Firebase authentication to authenticate users. Users are able to create entries which include their blood sugar levels, the time of the day (e.g. Before Breakfast), the time the entry was created (which by default is their current time), as well as to choose up to three types of medication for their entry. Users can see all their entries on the dashboard where their entries are sorted by date, and can even edit an entry if they wish.",
                images: [require('../../assets/img/diabeteslogs1.png'), require('../../assets/img/diabeteslogs2.png'),
                require('../../assets/img/diabeteslogs3.png')], technologies: "Javascript, Node.js, Express.js",
                githubUrl: "https://github.com/razvanusc/diabetes-logger", hostingUrl: "https://www.diabeteslogs.com/"
            },
            {
                id: 1, name: "Project Manager Tool", about: "The project was my first experience using Node.js and the Express.js framework. It includes multiple REST API routes accessible for normal users and admins using authentication and authorization through JWT. The tool was built to allow admins to see all the user accounts and create projects, and normal users to see their own profiles and all the created projects, and it stores the data in a Sequelize database.",
                technologies: "HTML, CSS, Javascript, React, Redux, Firebase",
                githubUrl: "https://github.com/razvanusc/project-manager-tool"
            },
            {
                id: 2, name: "Brewery", about: "After Le Wagon I decided to learn JavaScript and React, and build a small website which uses an API to show a few breweries from the United States. Moreover, you could sort the breweries based on a feature, select to check out a recommended brewery, based on the one you have selected, and select an option that yields a random brewery.",
                images: [require('../../assets/img/brewery1.png'), require('../../assets/img/brewery2.png'),
                require('../../assets/img/brewery3.png')], technologies: "HTML, CSS, Javascript, React",
                githubUrl: "https://github.com/razvanusc/brewery"
            },
            {
                id: 3, name: "SubMaster", about: "As a final project at Le Wagon we had to build an application called ”SubMaster” where yoga teachers could find the perfect substitute for their class in case they weren’t available. My experience with this application was mostly back-end oriented, as I worked on and built all of the back-end of the product, with Ruby and Ruby on Rails.",
                images: [require('../../assets/img/submaster1.png'), require('../../assets/img/submaster2.png'),
                require('../../assets/img/submaster3.png')], technologies: "Ruby, Ruby on Rails, HTML, CSS",
                githubUrl: "https://github.com/razvanusc/SubMaster", hostingUrl: "http://www.submaster.club/"
            },
            {
                id: 4, name: "B2Boats", about: "Before starting the final project at the Le Wagon coding bootcamp, we were asked to build an AirBnB clone. My group came up with the idea of a website where people can rent a boat. During the course of the project I built most of the back-end of the application, by working with Ruby and Ruby on Rails.",
                images: [require('../../assets/img/b2boats1.png'), require('../../assets/img/b2boats2.png'),
                require('../../assets/img/b2boats3.png')], technologies: "Ruby, Ruby on Rails, HTML, CSS",
                githubUrl: "https://github.com/razvanusc/b2boats", hostingUrl: "https://b2boats-clone.herokuapp.com/"
            },
        ]
    }

    render() {
        const { projects } = this.state
        const Icon = () => (
            <svg height="100" width="45">
                <line x1="" y1="0" x2="70" y2="0" className="inline-svg" />
            </svg>
        );

        return (
            <div id="portofolio" className="section scrollspy main-portofolio">
                <h1>PORTFOLIO</h1>
                <div className="svg"><Icon /></div>
                <div className="container">
                    {projects.map((project) => {
                        return (
                            <div className={"portofolio-projects " + (project.id < 4 ? "border-bottom" : null)} key={project.id}>
                                {project.images ? <div className="slider-container"><Carousel className="carousel-style" infiniteLoop={true} showStatus={false} showThumbs={false} dynamicHeight={true}>
                                    {project.images.map((image, index) =>
                                        <div key={index} className="slider-item-div">
                                            <img src={image} alt="slide" />
                                        </div>
                                    )}
                                </Carousel></div> : <div className='img-replacement'>No images to show :)</div>}
                                <div className="project-details">
                                    <h4>{project.name}</h4>
                                    <div>{project.about}</div>
                                    <br />
                                    <div className="technologies">Technologies used: {project.technologies}</div>
                                    <br />
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View Source Code</a>
                                    {project.hostingUrl ? <a className="check-it-btn" href={project.hostingUrl} target="_blank" rel="noopener noreferrer">Try It Out</a> : null}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Portofolio;