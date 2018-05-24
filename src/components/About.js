import React, { Component } from 'react';
import oesWP from '../images/oesLogo.jpg';
import '../App.css';
// import '../css/bootstrap.min.css';

class About extends Component {

    render() { 
      return (
        <div id="about">
            <div className="container">
            <h2 className="value-title">Order of The Eastern Star</h2>
                    <hr/>
            <div id="about">
                <div className="row justify-content-center">
                    <div className="col"><p className="oesQuote">We have seen His star in the East, and we have come to worship Him.</p></div>
                    </div>
                </div>
                <hr />
            
                <div className="row justify-content-center">
                    <div className="col-6">
                        <img src={oesWP} alt="OES Wallpaper"/>
                    </div>

                    <div className="col-6">
                        <p className="descriptionText">The Order of the Eastern Star is a Masonic appendant body open to both men and women. It was established in 1850 by lawyer and educator Rob Morris, a noted Freemason, but was only adopted and approved as an appendant body of the Masonic Fraternity in 1873. 
                        </p><p className="descriptionText">
                        The order is based on teachings from the Bible, but is open to people of all religious beliefs. It has approximately 10,000 chapters in twenty countries and approximately 500,000 members under its General Grand Chapter.
                            </p>
                    </div>
                </div>
                <hr />
            </div>
        </div>
      )
    }
    }

export default About;