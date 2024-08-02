import React from 'react'
import "./contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_22aqzao', 'template_8l7ljbp', form.current, {
        publicKey: 'CSFQXAxh9y-4SM2VR',
      })
      e.target.reset()
  };

  return (
    <section className="contact section" id="contact">
        <h2 className="section_title">Get in Touch</h2>
        <span className="section_subtitle">Contac Me</span>

        <div className="contact_container container grid">
            <div className="contact_content">
                <h3 className="contact_title">Talk to me</h3>
                <div className="div contact_info">
                    <div className="contact_card">
                        <i className="bx bx-mail-send contact_card-icon"></i>
                        <h3 className="contact_card-title">Email</h3>
                        <span className="contact_card-data">libianatalyromanarevalo@gmail.com</span>
                        <a href="mailto:libianatalyromanarevalo@gmail.com.com" className="contact_button">Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                    </div>
                    <div className="contact_card">
                        <i className="bx bxl-whatsapp contact_card-icon"></i>
                        <h3 className="contact_card-title">Whatsapp</h3>
                        <span className="contact_card-data">+591 64847410</span>
                        <a href="https://wa.link/vmq0zd" className="contact_button">Write me <i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                    </div>
                </div>
            </div>
            <div className="contact_content">
                <h3 className="contact_title">Write me your project</h3>
                <form  ref={form} onSubmit={sendEmail}
                    className="contact_form">
                    <div className="contact_form-div">
                        <label className="contact_form-tag">Name</label>
                        <input 
                            type='text' 
                            name='name' 
                            className='contact_form-input' 
                            placeholder='Insert your name'
                        />
                    </div>
                    <div className="contact_form-div">
                        <label className="contact_form-tag">Mail</label>
                        <input 
                            type='email' 
                            name='email' 
                            className='contact_form-input' 
                            placeholder='Insert your email'
                        />
                    </div>
                    <div className="contact_form-div contact_form-area">
                        <label className="contact_form-tag">
                            Project
                        </label>
                        <textarea name='project' cols="30" rows="10"
                            className='contact_form-input' placeholder='Describe your Project'/>
                    </div>
                    <button className="button button--flex">
                        Send Message
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="button_icon">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2111 2.06722L3.70001 5.94499C1.63843 6.46039 1.38108 9.28612 3.31563 10.1655L8.09467 12.3378C9.07447 12.7831 10.1351 12.944 11.1658 12.8342C11.056 13.8649 11.2168 14.9255 11.6622 15.9053L13.8345 20.6843C14.7139 22.6189 17.5396 22.3615 18.055 20.3L21.9327 4.78886C22.3437 3.14517 20.8548 1.6563 19.2111 2.06722ZM8.92228 10.517C9.85936 10.943 10.9082 10.9755 11.8474 10.6424C12.2024 10.5165 12.5417 10.3383 12.8534 10.1094C12.8968 10.0775 12.9397 10.0446 12.982 10.0108L15.2708 8.17974C15.6351 7.88831 16.1117 8.36491 15.8202 8.7292L13.9892 11.018C13.9553 11.0603 13.9225 11.1032 13.8906 11.1466C13.6617 11.4583 13.4835 11.7976 13.3576 12.1526C13.0244 13.0918 13.057 14.1406 13.4829 15.0777L15.6552 19.8567C15.751 20.0673 16.0586 20.0393 16.1147 19.8149L19.9925 4.30379C20.0372 4.12485 19.8751 3.96277 19.6962 4.00751L4.18509 7.88528C3.96065 7.94138 3.93264 8.249 4.14324 8.34473L8.92228 10.517Z" fill="var(--container-color)"/>
                        </svg>
                    </button>
                    
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
