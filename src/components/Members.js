import React, { Component } from 'react';
import ashanti from '../images/Ashanti.jpg';
import '../App.css';
// import '../css/bootstrap.min.css';
// Create the Main component


class Members extends Component {

    render() { 
      return (
        
        <div id="team">
            <div >
                <h4>OUR STARS</h4>
                <hr/>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
                <div className="p-2">
                    <img className="profile" src={ashanti} alt="memberPic"/>
                    <p>Ashanti</p>
                </div>
                <div className="p-2">
                    <img className="profile" src={ashanti} alt="memberPic"/>
                    <p>Ashanti</p>
                </div>
                <div className="p-2">
                    <img className="profile" src={ashanti} alt="memberPic"/>
                    <p>Ashanti</p>
                </div>
            </div>
            <div className="d-flex flex-row flex-wrap justify-content-center">
                <div className="p-2">
                    <img className="profile" src={ashanti} alt="memberPic"/>
                    <p>Ashanti</p>
                </div>
                <div className="p-2">
                    <img className="profile" src={ashanti} alt="memberPic"/>
                    <p>Ashanti</p>
                </div>
                <div className="p-2">
                    <img className="profile" src={ashanti} alt="memberPic"/>
                    <p>Ashanti</p>
                </div>
            </div>
        </div>
      )
    }
    }

export default Members;