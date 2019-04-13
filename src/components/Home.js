import React, { Component } from 'react';
import './Home.css'
import About from './About';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <div className="banner-content">
            <h1>Razvan Uscatu</h1>
            <p>Junior Front-End Web Developer</p>
          </div>
        </div>
        <nav class="tabs">
          <a class="tab" href="#">
            <h3>Home</h3>
          </a>
          <a class="tab" href="#">
            <h3>About</h3>
          </a>
          <a class="tab" href="#">
            <h3>Portfolio</h3>
          </a>
          <a class="tab" href="#">
            <h3>Contact</h3>
          </a>
          <div className="green-line"></div>
        </nav>
        <About />
      </div>
    )
  }
}

export default Home;
