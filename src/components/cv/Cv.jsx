import React from 'react'
import "./cv.css"
import { cvData } from './cvData'

const Cv = ({ open }) => {
  const {
    name, tagline, contact, skills, languages, certifications, competencies,
    experience, featuredProject, otherProjects, education, achievements,
  } = cvData

  if (!open) return null

  return (
    <div className="cv_container container" id="cv">
        <button className="cv_print-btn" onClick={() => window.print()}>
          <svg class="button_icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" viewBox="0 0 24 24" enable-background="new 0 0 28 32" >
                        <g>
                            <path fill="var(--title-color-dark)" d="M21.5,0h-13H8.369H7.685C7.56,0,7.44,0.047,7.348,0.131L7.262,0.209c-0.144,0.07-0.284,0.157-0.41,0.281
                                L4.364,2.857L0.163,6.694C0.059,6.789,0,6.923,0,7.063V7.5v0.268V25.5C0,26.327,0.673,27,1.5,27h20c0.827,0,1.5-0.673,1.5-1.5v-24
                                C23,0.673,22.327,0,21.5,0z M1.463,6.996l3.584-3.41L7.802,1.07C7.862,1.051,7.922,1.031,8,1.021V7H1.459
                                C1.46,6.999,1.462,6.997,1.463,6.996z M22,25.5c0,0.275-0.224,0.5-0.5,0.5h-20C1.224,26,1,25.775,1,25.5V8h7.5
                                C8.776,8,9,7.776,9,7.5V1h12.5C21.776,1,22,1.225,22,1.5V25.5z"/>
                            <path fill="var(--title-color-dark)" d="M26.5,31h-20C6.224,31,6,30.775,6,30.5v-0.604c0-0.276-0.224-0.5-0.5-0.5S5,29.62,5,29.896V30.5
                                C5,31.327,5.673,32,6.5,32h20c0.827,0,1.5-0.673,1.5-1.5v-24C28,5.673,27.327,5,26.5,5h-0.792c-0.276,0-0.5,0.224-0.5,0.5
                                s0.224,0.5,0.5,0.5H26.5C26.776,6,27,6.225,27,6.5v24C27,30.775,26.776,31,26.5,31z"/>
                            <path fill="var(--title-color-dark)" d="M18,11H5c-0.276,0-0.5,0.224-0.5,0.5S4.724,12,5,12h13c0.276,0,0.5-0.224,0.5-0.5S18.276,11,18,11z"/>
                            <path fill="var(--title-color-dark)" d="M18,15H5c-0.276,0-0.5,0.224-0.5,0.5S4.724,16,5,16h13c0.276,0,0.5-0.224,0.5-0.5S18.276,15,18,15z"/>
                            <path fill="var(--title-color-dark)" d="M18,19H5c-0.276,0-0.5,0.224-0.5,0.5S4.724,20,5,20h13c0.276,0,0.5-0.224,0.5-0.5S18.276,19,18,19z"/>
                        </g>
                    </svg>
        </button>

        <div className="cv-page">
          <div className="cv-header">
            <h1>{name}</h1>
            <div className="cv-tagline">
              {tagline.map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  {i < tagline.length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
            <div className="cv-contact-bar">
              <span>{contact.location}</span>
              <span>{contact.phone}</span>
              <span>{contact.email}</span>
              <span>
                <a href={contact.website.url} target="_blank" rel="noreferrer">
                  {contact.website.label}
                </a>
              </span>
            </div>
          </div>

          <div className="cv-main-content">
            <div className="cv-sidebar">
              <div className="cv-block">
                <div className="cv-block-title">Tecnologías & Herramientas</div>
                <div className="cv-skill-tags">
                  {skills.map((skill) => (
                    <span className="cv-skill-tag" key={skill}>{skill}</span>
                  ))}
                </div>
              </div>

              <div className="cv-block">
                <div className="cv-block-title">Idiomas</div>
                {languages.map((lang) => (
                  <div className="cv-lang-item" key={lang.name}>
                    <span>{lang.flag} {lang.name}</span>
                    <span>{lang.level}</span>
                  </div>
                ))}
              </div>

              <div className="cv-block">
                <div className="cv-block-title">Certificaciones</div>
                {certifications.map((cert) => (
                  <div className="cv-cert-item" key={cert}>✔ {cert}</div>
                ))}
              </div>

              <div className="cv-block">
                <div className="cv-block-title">Competencias Clave</div>
                <ul>
                  {competencies.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="cv-main-area">
              <div className="cv-block">
                <div className="cv-block-title">Experiencia Profesional</div>
                {experience.map((job) => (
                  <div className="cv-job" key={job.title}>
                    <div className="cv-job-title">
                      {job.title}
                      {job.badge && <span className="cv-highlight-badge">{job.badge}</span>}
                    </div>
                    <div className="cv-job-date">{job.date}</div>
                    <div className="cv-job-desc">
                      {job.description.map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < job.description.length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="cv-block">
                <div className="cv-block-title">{featuredProject.label}</div>
                <div className="cv-project-title">{featuredProject.emoji} {featuredProject.title}</div>
                <div className="cv-project-text">
                  <strong>{featuredProject.foundation}</strong>
                </div>
                <div className="cv-project-text">
                  {featuredProject.description.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < featuredProject.description.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </div>
                <div className="cv-project-meta">
                  <strong>Stack:</strong> {featuredProject.stack}<br />
                  <strong>Arquitectura:</strong> {featuredProject.architecture}<br />
                  <strong>Repositorio:</strong>{" "}
                  <a href={featuredProject.repo.url} target="_blank" rel="noreferrer">
                    {featuredProject.repo.label}
                  </a>
                </div>

                <div className="cv-block-title cv-block-title--inner">Otros Proyectos Relevantes</div>

                {otherProjects.map((project) => (
                  <React.Fragment key={project.title}>
                    <div className="cv-project-title">{project.emoji} {project.title}</div>
                    <div className="cv-project-text">{project.description}</div>
                  </React.Fragment>
                ))}
              </div>

              <div className="cv-block">
                <div className="cv-block-title">Formación Académica</div>
                <div><strong>{education.degree}</strong> – {education.institution} ({education.period})</div>
                <div className="cv-edu-note">{education.note}</div>
              </div>

              <div className="cv-block">
                <div className="cv-block-title">Logros & Participación Activa</div>
                <ul>
                  {achievements.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cv
