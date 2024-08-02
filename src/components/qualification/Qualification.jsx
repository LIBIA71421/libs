import React, { useState } from 'react'
import "./qualification.css"

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <secyion className="qualification section">
        <h2 className="section_title">Qualification</h2>
        <span className="section_subtitle">My Person</span>
        
        <div className="qualification_container container">
            <div className="qualification_tabs">
                <div className={
                    toggleState === 1 ? 
                    "qualification_button qualification_active button--flex"
                    :
                    "qualification_button button--flex"} 
                    onClick={() => toggleTab(1)}
                >
                    <uil className="uil uil-graduation-cap qualification_icon"></uil>
                    Education
                </div>
                <div className={
                    toggleState === 2 ? 
                    "qualification_button qualification_active button--flex"
                    :
                    "qualification_button button--flex"} 
                    onClick={() => toggleTab(2)}
                >
                    <uil className="uil uil-briefcase-alt qualification_icon"></uil>
                    Experience
                </div>
            </div>

            <div className="qualification_sections">
                <div className={
                    toggleState === 1 ? 
                    "qualification_content qualification_content-active"
                    :
                    "qualification_content"} 
                >
                    
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">
                                Systems Engineer
                            </h3>
                            <span className="qualification_subtitle">
                                Cochabamba - University
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 
                                2020 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span >
                        </div>
                    </div>


                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">
                                Web Development
                            </h3>
                            <span className="qualification_subtitle">
                                Wix Platform
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 
                                2023
                            </div>
                        </div>
                    </div>


                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">
                                Web Development
                            </h3>
                            <span className="qualification_subtitle">
                                Google Site
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i>
                                2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span >
                        </div>
                    </div>


                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">
                                Ux Designer
                            </h3>
                            <span className="qualification_subtitle">
                                Stores and Catalogs
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 
                                2023
                            </div>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">
                                Systems Engineer
                            </h3>
                            <span className="qualification_subtitle">
                                Cochabamba - University
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 
                                2020 - Present
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span >
                        </div>
                    </div>
                </div> 
                
                
                
                <div className={
                    toggleState === 2 ? 
                    "qualification_content qualification_content-active"
                    :
                    "qualification_content"} 
                >
                    
                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">
                                Assistantships Programming
                            </h3>
                            <span className="qualification_subtitle">
                                Cochabamba - University
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 
                                2021 - 2022
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span >
                        </div>
                    </div>


                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">
                                Aplication Developer
                            </h3>
                            <span className="qualification_subtitle">
                                Cochabamba - University
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 
                                2022
                            </div>
                        </div>
                    </div>


                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">
                                Web Development
                            </h3>
                            <span className="qualification_subtitle">
                                Cochabamba - University
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 
                                 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span >
                        </div>
                    </div>


                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">
                                Game Development
                            </h3>
                            <span className="qualification_subtitle">
                                Cochabamba - University
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 
                                2020
                            </div>
                        </div>
                    </div>


                    <div className="qualification_data">
                        <div>
                            <h3 className="qualification_title">
                                Full-Stack Developer
                            </h3>
                            <span className="qualification_subtitle">
                                Cochabamba - University
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 
                                2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                    </div>

                    <div className="qualification_data">
                        <div></div>
                        <div>
                            <span className="qualification_rounder"></span>
                            <span className="qualification_line"></span>
                        </div>
                        <div>
                            <h3 className="qualification_title">
                                Hackathon Participant
                            </h3>
                            <span className="qualification_subtitle">
                                Cochabamba - University
                            </span>
                            <div className="qualification_calender">
                                <i className="uil uil-calendar-alt"></i> 
                                2024
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    </secyion>
  )
}

export default Qualification
