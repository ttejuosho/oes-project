import React, { Component } from 'react';
import '../App.css';
// import '../css/bootstrap.min.css';
import fbLogo from "../images/facebook.png";
import igLogo from "../images/insta.png";

class Footer extends Component{

    render() {
  
      return (
           
        <div className="foot">
            <a href="" target="_blank" rel="noopener noreferrer"><img className="social" src={igLogo} alt="IG Logo" /></a>
            <a href="https://www.facebook.com/FV137/" target="_blank" rel="noopener noreferrer"><img className="social" src={fbLogo} alt="Facebook Logo"/></a>
        </div>
           
      )
    }
    }



export default Footer;