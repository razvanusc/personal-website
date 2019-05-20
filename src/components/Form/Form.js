import React from 'react';
import './Form.css';
import 'materialize-css/dist/css/materialize.min.css';


const About = () => {
    return (
        <div id="form" className="section scrollspy form">
            <h1>Contact</h1>
            <div className="email">You can reach me at <a href="mailto:razvanusc@gmail.com">razvanusc@gmail.com</a> or fill in the following form:</div>
            <form className="contact-form" name="contact" value="contact">
                <div className="input-field">
                    <input type="text" name="name" />
                    <label>Name</label>
                </div>
                <div className="input-field">
                    <input type="email" name="email" />
                    <label>Email</label>
                </div>
                <div className="text-area">
                    <label>Message</label>
                    <textarea name="message"></textarea>
                </div>
                <div className="contact-btn">
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default About;