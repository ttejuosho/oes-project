import React, { Component } from 'react';
import mail from "../images/mail-blue.png";



class Contact extends Component {
    render(){
        return(
            <div id="contact">
                <form className="needs-validation" id="contact-form" method="POST" novalidate>
                    <div className="messages"></div>
                    <div className="controls">
                        <div id="contact">
                            <div>
                                <div id="snackbar">Your Message has been sent</div>
                                <h4 className="white">MESSAGE US</h4>
                                <hr className="white"/>
                                <img id="mail" src={mail} alt="MailPic"/>
                                <p>foxvalley137@gmail.com</p>
                            </div>
                            
                            <div className="d-md-flex flex-row flex-wrap justify-content-center">
                                <div className="p-2 width">
                                    <div className="form-group">
                                        <input id="form_name" type="text" name="firstName" className="form-control" placeholder="Please enter your first name *" required="required" data-error="First Name is required." />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="p-2 width">
                                    <div className="form-group">
                                        <input id="form_lastname" type="text" name="lastName" className="form-control" placeholder="Please enter your last name *" required="required" data-error="Last Name is required." />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-md-flex flex-row flex-wrap justify-content-center">
                                <div className="p-2 width">
                                    <div className="form-group">
                                        <input id="form_email" type="email" name="email" className="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div className="p-2 width">
                                    <div className="form-group">
                                        <input id="form_phone" type="tel" name="phone" className="form-control" placeholder="Please enter your phone" />
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-md-flex flex-row flex-wrap justify-content-center">
                                <div className="p-2 width">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="Checkbox0" value="option0" />
                                    <label className="form-check-label" htmlFor="Checkbox0">I want to join the Eastern Star</label>
                                </div>
                                </div>
                                <div className="p-2 width">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="CheckBox1" value="option1" />
                                    <label className="form-check-label" htmlFor="Checkbox1">Send me more info about OES</label>
                                </div>
                                </div>

                            </div>
                            <div className="d-md-flex flex-row flex-wrap justify-content-center">
                                <div className="p-2 width2">
                                    <div className="form-group">
                                        <textarea id="form_message" rows="5" name="message" className="form-control" placeholder="Enter Message Here" required="required" data-error="Message field is empty."></textarea>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="d-md-flex flex-row flex-wrap justify-content-center">
                                <div className="p-2">
                                    <input type="submit" className="btn sendmsg btn-success btn-send" />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Contact; 