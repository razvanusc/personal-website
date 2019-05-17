import React, { Component } from 'react';
import './Portofolio.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Portofolio extends Component {
    state = {
        projects: [
            {
                name: "Diabetes Logs", about: "Something Something", images: [require('../../assets/diabeteslogs1.png'), require('../../assets/diabeteslogs2.png'),
                require('../../assets/diabeteslogs3.png')], technologies: "Javascript Node.js Express.js",
                githubUrl: "https://github.com/razvanusc/diabetes-logger", hostingUrl: "https://www.diabeteslogs.com/"
            },
            {
                name: "Project Manager Tool", about: "Something Something", images: [], technologies: "HTML CSS Javascript React Redux Firebase",
                githubUrl: "https://github.com/razvanusc/project-manager-tool"
            },
            {
                name: "To Do List App", about: "Something Something", images: [require('../../assets/todolist1.png'), require('../../assets/todolist2.png')],
                technologies: "HTML CSS Javascript React Redux", githubUrl: "https://github.com/razvanusc/to-do-list-app"
            },
            {
                name: "Brewery", about: "Something Something", images: [require('../../assets/brewery1.png'), require('../../assets/brewery2.png'),
                require('../../assets/brewery3.png')], technologies: "HTML CSS Javascript React",
                githubUrl: "https://github.com/razvanusc/brewery"
            },
            {
                name: "SubMaster", about: "Something Something", images: [require('../../assets/submaster1.png'), require('../../assets/submaster2.png'),
                require('../../assets/submaster3.png')], technologies: "Ruby Ruby on Rails HTML CSS",
                githubUrl: "https://github.com/razvanusc/SubMaster", hostingUrl: "http://www.submaster.club/"
            },
            {
                name: "B2Boats", about: "Something Something", images: [require('../../assets/b2boats1.png'), require('../../assets/b2boats2.png'),
                require('../../assets/b2boats3.png')], technologies: "Ruby Ruby on Rails HTML CSS",
                githubUrl: "https://github.com/razvanusc/b2boats", hostingUrl: "https://b2boats-clone.herokuapp.com/"
            },
        ]
    }

    render() {
        const { projects } = this.state
        const imageStyle = { width: '400px', height: '225px' }
        console.log(projects.map(project => project.images))

        return (
            <div id="portofolio" className="section scrollspy main-portofolio">
                <h1>PORTFOLIO</h1>
                <div className="container">
                    {projects.map((project, index) => {
                        return (
                            <div className="portofolio-projects" key={index}>
                                <div className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        {project.images.map((image, index) =>
                                            <div className="carousel-item" key={index}>
                                                <img src={image} className="d-block w-100" alt="slide" style={imageStyle}/>
                                            </div>
                                        )}
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                                <div className="project-details">
                                    <div>{project.name}</div>
                                    <div>{project.about}</div>
                                    <div>{project.technologies}</div>
                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Github</a>
                                    {project.hostingUrl ? <a href={project.hostingUrl} target="_blank" rel="noopener noreferrer">Hosting</a> : null}
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