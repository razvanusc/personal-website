import React, { Component } from 'react';
import './Home.css'
import "../assets/avatar.jpg"

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="banner">
          <div className="banner-content">
            <div> <img src="../assets/avatar.jpg"/> </div>
            <h1>Razvan Uscatu</h1>
            <p>Junior Full-Stack Web Developer</p>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
