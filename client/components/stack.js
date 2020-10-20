import React from 'react';
import bootstrap from '../assets/images/frontend/bootstrap.png';
import bulma from '../assets/images/frontend/bulma.png';
import chakra from '../assets/images/frontend/chakra.png';
import css from '../assets/images/frontend/css.png';
import html from '../assets/images/frontend/html.png';
import js from '../assets/images/frontend/js.png';
import nativebase from '../assets/images/frontend/nativebase.jpeg';
import react from '../assets/images/frontend/react.png';
import redux from '../assets/images/frontend/redux.png';
import express from '../assets/images/backend/express.png'
import node from '../assets/images/backend/node.png'
import postgres from '../assets/images/backend/postgres.png'
import sequeilize from '../assets/images/backend/sequelize.png';
import babel from '../assets/images/devops/babel.jpg';
import firebase from '../assets/images/devops/firebase.png';
import git from '../assets/images/devops/git.png';
import github from '../assets/images/devops/github.png';
import heroku from '../assets/images/devops/heroku.png';
import homebrew from '../assets/images/devops/homebrew.png';
import npm from '../assets/images/devops/npm.png';
import webpack from '../assets/images/devops/webpack.png';
import expo from '../assets/images/tools/expo.png';
import postico from '../assets/images/tools/postico.png';
import postman from '../assets/images/tools/postman.png';
import vscode from '../assets/images/tools/vscode.png';

const Stack = () => {
  return (
    <div id='stack'>
      <div>
        <h3>Tech Stack</h3>
        <div className='stack-page'>
          <div className='stack-container'>
            <h5>Front End</h5>
            <div className='logo-container'>
              <img className='logo' src={html} alt="HTML"/>
              <img className='logo' src={css} alt="CSS"/>
              <img className='logo' src={js} alt="JavaScript"/>
              <img className='logo' src={react} alt="React"/>
              <img className='logo' src={redux} alt="Redux"/>
              <img className='logo' src={bootstrap} alt="Bootstrap"/>
              <img className='logo' src={nativebase} alt="NativeBase"/>
              <img className='logo' src={bulma} alt="Bulma"/>
              <img className='logo' src={chakra} alt="Chakra"/>
            </div>
          </div>
          <div className='stack-container'>
            <h5>Back End</h5>
            <div className='logo-container'>
              <img className='logo' src={node} alt="Node.js"/>
              <img className='logo' src={postgres} alt="Postgres"/>
              <img className='logo' src={sequeilize} alt="Sequelize"/>
              <img className='logo' src={express} alt="Express"/>
            </div>
          </div>
          <div className='stack-container'>
            <h5>DevOps</h5>
            <div className='logo-container'>
              <img className='logo' src={npm} alt="npm"/>
              <img className='logo' src={homebrew} alt="Homebrew"/>
              <img className='logo' src={webpack} alt="Webpack"/>
              <img className='logo' src={babel} alt="babel"/>
              <img className='logo' src={git} alt="Git"/>
              <img className='logo' src={github} alt="Github"/>
              <img className='logo' src={heroku} alt="Heroku"/>
              <img className='logo' src={firebase} alt="Firebase"/>
            </div>
          </div>
          <div className='stack-container'>
            <h5>Tools</h5>
            <div className='logo-container'>
              <img className='logo' src={vscode} alt="VS Code"/>
              <img className='logo' src={expo} alt="expo"/>
              <img className='logo' src={postico} alt="Postico"/>
              <img className='logo' src={postman} alt="Postman"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stack