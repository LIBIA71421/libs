import React, { useState } from 'react'
import "./services.css"
const Services = () => {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What I offer</span>
        <div className="services_container container grid">

          <div className="services_content"> 
            <div>
              <i className="uil uil-web-grid services_icon"></i>
              <h3 className="services_title">
                Full Web <br/> Development 
              </h3>
            </div>

            <span className="services_button" onClick={() => toggleTab(1)}>
              View More 
              <i className="uil uil-arrow-right services_button-ico"></i>
            </span>

            <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
              <div className="services_modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                <h3 className="services_modal-title">Web Development</h3>
                <p className="services_modal-description">Service with more than 1 year of Experience. Proving quality work to clients and companies</p>
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I design attractive and functional websites</p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I customize templates to meet specific needs</p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I integrate interactive elements to enhance user experience</p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I ensure websites are optimized for mobile devices</p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I develop interactive web applications using React, focusing on reusable components</p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I manage application state efficiently using hooks and context</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services_content">
            <div>
              <i className="uil uil-arrow services_icon"></i>
              <h3 className="services_title">
                Ui/Ux <br/> Designer
                </h3>
            </div>

            <span onClick={() => toggleTab(2)} className="services_button">
              View More  
              <i className="uil uil-arrow-right services_button-ico"></i>
            </span>

            <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
              <div className="services_modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>

                <h3 className="services_modal-title">Ui/Ux Designer</h3>
                <p className="services_modal-description">Service with more than 1 year of Experience. Proving quality work to clients and companies</p>
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I optimize navigation to make information easier to access</p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I design user interfaces that improve interaction and usability</p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I create effective product presentations and layouts</p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I conduct usability testing to ensure maximum customer satisfaction</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="services_content">
            <div>
              <i className="uil uil-edit services_icon"></i>
              <h3 className="services_title">
                System <br/> Engineering
                </h3>
            </div>

            <span onClick={() => toggleTab(3)} className="services_button">
              View More  
              <i className="uil uil-arrow-right services_button-ico"></i>
            </span>

            <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
              <div className="services_modal-content">
                <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                <h3 className="services_modal-title">Engineer</h3>
                <p className="services_modal-description">Service with more than 1 year of Experience. Proving quality work to clients and companies</p>
                <ul className="services_modal-services grid">
                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I analyze and design systems to provide technological solutions</p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I develop software applications tailored to user needs</p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I manage technology projects, overseeing planning and execution</p>
                  </li>

                  <li className="services_modal-service">
                    <i className="uil uil-check-circle services_modal-icon"></i>
                    <p className="services_modal-info">I handle the implementation and maintenance of systems and solutions</p>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          
        </div>
    </section>
  )
}

export default Services
