import React, { Component } from 'react';
import Stack from './stack';
import Nav from './nav';
import About from './about';
import Contact from './contact';
import Projects from './projects';

class Home extends Component{
  render(){
    return (
    <div>
      <Nav/>
      <div className='banner'></div>
      <About/>
      <Stack/>
      <Projects/>
      <Contact/>
    </div>
    )
  }
}

export default Home;