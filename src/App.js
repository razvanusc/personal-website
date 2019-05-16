import React, { Component } from 'react';
import About from './components/About/About';
import Portfolio from './components/Portofolio/Portofolio';
import Form from './components/Form/Form';
import Banner from './components/Banner/Banner';
import Tabs from './components/Tabs/Tabs';

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Tabs />
        <About />
        <Portfolio />
        <Form />
      </div>
    )
  }
}

export default App;
