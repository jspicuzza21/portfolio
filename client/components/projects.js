import React from 'react';

const Projects = () => (
  <div id="projects">
    <h1>Projects</h1>
    <div className='pr'>
      <div className='pr-inner'>
        <div className='pr-description'>
          <h3>Smooth Jazz</h3>
          <p>A custom built e-commerce site that sells the smoothest of jazz instruments.</p>
          <p>Tech Used: Node.js | React | React-Redux | Email-js | Webpack | Sequelize | ChakraUI | Stripe</p>
        </div>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/6LB9b0yrj4Q" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    </div>
    <div className='pr pr-dark'>
      <div className='pr-inner'>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/670IlbyAxMM" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className='pr-description'>
          <h3>SCPO Cyber Portal</h3>
          <p>Full stack web portal built to help manage and track requests made to the Cyber Crimes Unit at the Somerset County Prosecutor's Office for forensic exams.</p>
          <p>Tech Used: React | Redux | Postgres | Sequelize | Node.js | Email.js | Firebase | Bulma | ChakraUI | Webpack | Babel</p>
        </div>
      </div>
    </div>
    <div className='pr'>
      <div className='pr-inner'>
        <div className='pr-description'>
          <h3>Bug Out</h3>
          <p>Full stack application that makes practicing coding fun by allowing multiple users to face off in a multiplayer code-off. Each user competes to be the first one to solve coding prompts while earning power ups along the way to slow down the competition.</p>
          <p>Tech Used: Node.js | React | Redux | React-Redux | Webpack | Babel | Postgres | Sequelize | Socket.io | ChakraUI</p>
        </div>
      </div>
    </div>
    <div className='pr pr-dark'>
      <div className='pr-inner'>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fUfDbITOQe8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className='pr-description'>
          <h3>What's App-enning?</h3>
          <p>Mobile application that helps the user find recipes based on a query of ingredients, nutritional value, or recognition from a photo. The app also has the ability to help the user pick up the type of wine to pair with a food.</p>
          <p>Tech Used: React-native | NativeBase | Spoonacular API | Expo</p>
        </div>
      </div>
    </div>
  </div>
)

export default Projects