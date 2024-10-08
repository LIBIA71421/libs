import React from 'react'
import "./about.css"
import AboutImg from "../../assets/about.jpg"
import Info from './Info'
import CV from "../../assets/CV.pdf"

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>
        
        <div className="about_container container grid">
            <img src={AboutImg} alt="" className="about_img" />
            <div className="about_data">
                <Info/>
                <p className="about_description">
                I have experience in web and software development using technologies such as C++, C#, Angular, React, JavaScript, Node.js, HTML, CSS, SQL Server, MongoDB, Firebase, and Wix. Among my outstanding projects is a complete ecommerce in React. In addition, I have worked as an assistant in assistantships at the university and participated in a hackathon with a project called Neuromynda, where I learned how to use Gemini as an evaluator of emotional states in JavaScript. 
                </p>
                <a download="" href={CV} className="button button_flex">
                    Download CV
                    <svg class="button_icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 28 32" >
                        <g>
                            <path fill="var(--container-color)" d="M21.5,0h-13H8.369H7.685C7.56,0,7.44,0.047,7.348,0.131L7.262,0.209c-0.144,0.07-0.284,0.157-0.41,0.281
                                L4.364,2.857L0.163,6.694C0.059,6.789,0,6.923,0,7.063V7.5v0.268V25.5C0,26.327,0.673,27,1.5,27h20c0.827,0,1.5-0.673,1.5-1.5v-24
                                C23,0.673,22.327,0,21.5,0z M1.463,6.996l3.584-3.41L7.802,1.07C7.862,1.051,7.922,1.031,8,1.021V7H1.459
                                C1.46,6.999,1.462,6.997,1.463,6.996z M22,25.5c0,0.275-0.224,0.5-0.5,0.5h-20C1.224,26,1,25.775,1,25.5V8h7.5
                                C8.776,8,9,7.776,9,7.5V1h12.5C21.776,1,22,1.225,22,1.5V25.5z"/>
                            <path fill="var(--container-color)" d="M26.5,31h-20C6.224,31,6,30.775,6,30.5v-0.604c0-0.276-0.224-0.5-0.5-0.5S5,29.62,5,29.896V30.5
                                C5,31.327,5.673,32,6.5,32h20c0.827,0,1.5-0.673,1.5-1.5v-24C28,5.673,27.327,5,26.5,5h-0.792c-0.276,0-0.5,0.224-0.5,0.5
                                s0.224,0.5,0.5,0.5H26.5C26.776,6,27,6.225,27,6.5v24C27,30.775,26.776,31,26.5,31z"/>
                            <path fill="var(--container-color)" d="M18,11H5c-0.276,0-0.5,0.224-0.5,0.5S4.724,12,5,12h13c0.276,0,0.5-0.224,0.5-0.5S18.276,11,18,11z"/>
                            <path fill="var(--container-color)" d="M18,15H5c-0.276,0-0.5,0.224-0.5,0.5S4.724,16,5,16h13c0.276,0,0.5-0.224,0.5-0.5S18.276,15,18,15z"/>
                            <path fill="var(--container-color)" d="M18,19H5c-0.276,0-0.5,0.224-0.5,0.5S4.724,20,5,20h13c0.276,0,0.5-0.224,0.5-0.5S18.276,19,18,19z"/>
                        </g>
                    </svg>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About
