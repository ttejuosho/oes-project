import React, { Component } from 'react';
import "./App.css";
import "./css/bootstrap.css";
import "./css/bootstrap-reboot.min.css";
import "./css/bootstrap-reboot.css";
import "./css/bootstrap-grid.css";
// import Counter from './Counter.js'
import store from './store/';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Members from './components/Members.js';
import About from './components/About.js';
import Events from './components/Events.js';
import Contact from './components/Contact.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Members />
        {/* <Counter store={store}/> */}
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
