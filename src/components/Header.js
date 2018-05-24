import React, { Component } from 'react';
import homeLogo from  "../images/oesLogo.jpg";
import '../App.css';



class Header extends Component{

    render() {
  
      return (
            <div className="Header">
                <nav className="navbar navbar-light navbar-expand-md">
                    <a href="/" className="navbar-brand App-logo"><img id="nav-logo" src={homeLogo} alt="HomeLogo" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto">
                            <a className="nav-item nav-link" href="#about">About</a>
                            <a className="nav-item nav-link" href="#team">Team 137</a>
                            <a className="nav-item nav-link" href="#events">Our Work</a>
                            <a className="nav-item nav-link" href="#contact">Contact</a>
                            </div>
                        </div>
                </nav>
            </div>
      )
    }
    }

export default Header;