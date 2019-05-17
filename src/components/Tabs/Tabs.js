import React, { Component } from 'react';
import './Tabs.css';
import M from 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';

class Tabs extends Component {
  state = {
    intervalId: 0
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.scrollspy');
      M.ScrollSpy.init(elems, { scrollOffset: 70 });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div className="nav-buttons section table-of-contents">
        <div><a onClick={window.scrollTo(0, 0)} href="#banner">Home</a></div>
        <div><a href="#about">About</a></div>
        <div><a href="#portofolio">Portfolio</a></div>
        <div><a href="#form">Contact</a></div>
      </div>
    )
  }
}

export default Tabs;