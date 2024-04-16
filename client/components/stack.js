import React from "react";
import bootstrap from "../assets/images/frontend/bootstrap.png";
import bulma from "../assets/images/frontend/bulma.png";
import chakra from "../assets/images/frontend/chakra.png";
import css from "../assets/images/frontend/css.png";
import html from "../assets/images/frontend/html.png";
import js from "../assets/images/frontend/js.png";
import nativebase from "../assets/images/frontend/nativebase.jpeg";
import react from "../assets/images/frontend/react.png";
import redux from "../assets/images/frontend/redux.png";
import express from "../assets/images/backend/express.png";
import node from "../assets/images/backend/node.png";
import postgres from "../assets/images/backend/postgres.png";
import sequeilize from "../assets/images/backend/sequelize.png";
import babel from "../assets/images/devops/babel.jpg";
import firebase from "../assets/images/devops/firebase.png";
import git from "../assets/images/devops/git.png";
import github from "../assets/images/devops/github.png";
import heroku from "../assets/images/devops/heroku.png";
import homebrew from "../assets/images/devops/homebrew.png";
import npm from "../assets/images/devops/npm.png";
import webpack from "../assets/images/devops/webpack.png";
import expo from "../assets/images/tools/expo.png";
import postico from "../assets/images/tools/postico.png";
import postman from "../assets/images/tools/postman.png";
import vscode from "../assets/images/tools/vscode.png";
import java from "../assets/images/backend/java.png";
import travis from "../assets/images/devops/travis.png";
import intellij from "../assets/images/tools/intellij.png";
import docker from "../assets/images/devops/docker.png";
import aws from "../assets/images/devops/aws.png";
import sequelace from "../assets/images/tools/sequelace.png";

const Stack = () => {
  return (
    <div id="stack">
      <div>
        <h1>Tech Stack</h1>
        <div className="stack-page">
          <div className="stack-container">
            <h5>Front End</h5>
            <div className="logo-container">
              <img className="logo" src={html} alt="HTML" title="HTML" />
              <img className="logo" src={css} alt="CSS" title="CSS" />
              <img
                className="logo"
                src={js}
                alt="JavaScript"
                title="JavaScript"
              />
              <img
                className="logo"
                src={react}
                alt="React"
                title="React/ReactNative"
              />
              <img className="logo" src={redux} alt="Redux" title="Redux" />
              <img
                className="logo"
                src={bootstrap}
                alt="Bootstrap"
                title="Bootstrap"
              />
              <img
                className="logo"
                src={nativebase}
                alt="NativeBase"
                title="NativeBase"
              />
              <img className="logo" src={bulma} alt="Bulma" title="Bulma" />
              {/* <img className='logo' src={chakra} alt="Chakra"/> */}
            </div>
          </div>
          <div className="stack-container">
            <h5>DevOps</h5>
            <div className="logo-container">
              <img className="logo" src={npm} alt="npm" title="npm" />
              {/* <img
                className="logo"
                src={homebrew}
                alt="Homebrew"
                title="Homebrew"
              /> */}
              <img
                className="logo"
                src={webpack}
                alt="Webpack"
                title="Webpack"
              />
              <img className="logo" src={babel} alt="babel" title="babel" />
              {/* <img className="logo" src={git} alt="Git" title="Git" /> */}
              <img className="logo" src={github} alt="Github" title="Github" />
              <img className="logo" src={heroku} alt="Heroku" title="Heroku" />
              <img className="logo" src={docker} alt="docker" title="docker" />
              <img className="logo" src={travis} alt="travis" title="travis" />
              <img
                className="logo"
                src={firebase}
                alt="Firebase"
                title="Firebase"
              />
              <img
                className="logo"
                src={aws}
                alt="aws"
                title="aws"
                style={{ width: "100px" }}
              />
            </div>
          </div>
          <div className="stack-container">
            <h5>Back End</h5>
            <div className="logo-container">
              <img className="logo" src={node} alt="Node.js" title="Node.js" />
              <img
                className="logo"
                src={postgres}
                alt="Postgres"
                title="Postgres"
              />
              <img
                className="logo"
                src={sequeilize}
                alt="Sequelize"
                title="Sequelize"
              />
              <img
                className="logo"
                src={express}
                alt="Express"
                title="Express"
              />
              <img className="logo" src={java} alt="Java" title="Java" />
            </div>
          </div>
          <div className="stack-container">
            <h5>Tools</h5>
            <div className="logo-container">
              <img
                className="logo"
                src={vscode}
                alt="VS Code"
                title="VS Code"
              />
              <img className="logo" src={expo} alt="expo" title="Expo" />
              <img
                className="logo"
                src={postico}
                alt="Postico"
                title="Postico"
              />
              <img
                className="logo"
                src={postman}
                alt="Postman"
                title="Postman"
              />
              <img
                className="logo"
                src={intellij}
                alt="intelli"
                title="intelli"
              />
              <img
                className="logo"
                src={sequelace}
                alt="sequelace"
                title="sequelace"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
