import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Libia Roman</h1>
            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>
                <li>
                    <a href="#projects" className="footer_link">Projects</a>
                </li>
            </ul>
            <div className="footer_social">
               
                <a href="www.linkedin.com/in/libia-nataly-roman-arevalo" 
                    className="footer_social-link" target="_blank">
                    <i class="uil uil-linkedin"></i>
                </a>
            </div>
            <span className="footer_copy">&#169; Libia All rigths reserved</span>
        </div>
    </footer>
  )
}

export default Footer
