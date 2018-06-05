import React, { Component } from 'react';
import ashanti from '../images/Ashanti.jpg';
import avatarPlaceholder from '../images/avatar-placeholder.png';
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
                    <p>Sis Ashanti Tejuosho</p>
                    <p>Worthy Matron</p>
                </div>
                <div className="p-2">
                    <img className="profile" src={avatarPlaceholder} alt="memberPic"/>
                    <p>Bro Ganges Bell</p>
                    <p>Worthy Patron</p>
                </div>
            </div>
        </div>
      )
    }
    }

export default Members;