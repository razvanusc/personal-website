import React, { Component } from 'react';
import './Form.css';
import 'materialize-css/dist/css/materialize.min.css';

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class About extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state

        return (
            <div id="form" className="section scrollspy form">
                <h1>Contact</h1>
                <div className="email">You can reach me at <a href="mailto:razvanusc@gmail.com">razvanusc@gmail.com</a> or fill in the following form:</div>
                <form className="contact-form" onSubmit={this.handleSubmit}>
                    <div className="input-field">
                        <input type="text" name="name" value={name} onChange={this.handleChange}/>
                        <label>Name</label>
                    </div>
                    <div className="input-field">
                        <input type="email" name="email" value={email} onChange={this.handleChange}/>
                        <label>Email</label>
                    </div>
                    <div className="text-area">
                        <label>Message</label>
                        <textarea name="message" value={message} onChange={this.handleChange} />
                    </div>
                    <div className="contact-btn">
                        <button type="submit">Send</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default About;