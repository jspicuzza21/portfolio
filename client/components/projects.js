import React from 'react';

const Projects = () => (
  <div id="projects">
    <h3>Projects</h3>
    <div className='pr'>
      <h5>Smooth Jazz</h5>
      <div className='pr-inner'>
        <div>
          <p>A custom built e-commerce site that sells the smoothest of jazz instruments.</p>
          <p>Tech Used: Node.js | React | React-Redux | Email-js | Webpack | Sequelize | ChakraUI | Stripe</p>
        </div>
      </div>
    </div>
    <div className='pr pr-dark'>
      <h5>SCPO Cyber Portal</h5>
      <div className='pr-inner'>
        <div>
          <p>Full stack web portal built to help manage and track requests made to the Cyber Crimes Unit at the Somerset County Prosecutor's Office for forensic exams.</p>
          <p>Tech Used: React | Redux | Postgres | Sequelize | Node.js | Email.js | Firebase | Bulma | ChakraUI | Webpack | Babel</p>
        </div>
      </div>
    </div>
    <div className='pr'>
      <h5>Bug Out</h5>
      <div className='pr-inner'>
        <div>
          <p>Full stack application that makes practicing coding fun by allowing multiple users to face off in a multiplayer code-off. Each user competes to be the first one to solve coding prompts while earning power ups along the way to slow down the competition.</p>
          <p>Tech Used: Node.js | React | Redux | React-Redux | Webpack | Babel | Postgres | Sequelize | Socket.io | ChakraUI</p>
        </div>
      </div>
    </div>
    <div className='pr pr-dark'>
      <h5>What's App-enning?</h5>
      <div className='pr-inner'>
        <div>
          <p>Mobile application that helps the user find recipes based on a query of ingredients, nutritional value, or recognition from a photo. The app also has the ability to help the user pick up the type of wine to pair with a food.</p>
          <p>Tech Used: React-native | NativeBase | Spoonacular API | Expo</p>
        </div>
      </div>
    </div>
  </div>
)

export default Projects