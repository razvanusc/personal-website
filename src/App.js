import React, { Component } from 'react';
import About from './components/About/About';
import Portfolio from './components/Portofolio/Portofolio';
import Form from './components/Form/Form';
import Banner from './components/Banner/Banner';
import Tabs from './components/Tabs/Tabs';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Banner />
        <Tabs />
        <About />
        <Portfolio />
        <Form />
        <Footer />
      </div>
    )
  }
}

export default App;
