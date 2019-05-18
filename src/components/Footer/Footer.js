import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <div className="rights">© 2019 | Razvan Uscatu</div>
                <a className="source" href="https://github.com/razvanusc/personal-website" target="_blank" rel="noopener noreferrer">Source Code</a>
            </div>
            <div className="footer-right">
                <a className="github" href="https://github.com/razvanusc" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-alt fa-2x"></i></a>
                <a className="linkedin" href="https://www.linkedin.com/in/razvan-uscatu-012751a1/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-2x"></i></a>
            </div>
        </div>
    )
}

export default Footer;