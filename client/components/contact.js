import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt, faAt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Contact = ()=> (
  <div id='contact'>
    <h3>Want to connect? Click the links below to reach out!</h3>
    <div className="contact-container">
      <div className="contact">
        <a href="https://drive.google.com/file/d/13HWGfTRV0J_bHMBcaOG-lI-vcdotYCYg/view?usp=sharing"> <FontAwesomeIcon icon={faFileAlt} size="3x" className="icon"/></a>
        <a href="mailto:j.spicuzzajr@gmail.com"> <FontAwesomeIcon icon={faAt} size="3x" className="icon"/></a>
        <a href="https://github.com/jspicuzza21"> <FontAwesomeIcon icon={faGithub} size="3x" className="icon"/></a>
        <a href="https://www.linkedin.com/in/joe-spicuzza-174a1161/"> <FontAwesomeIcon icon={faLinkedin} size="3x" className="icon"/></a>
      </div>
    </div>
  </div>
)

export default Contact
