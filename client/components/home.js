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
      <div className='banner'>
        <div className="fade-In">
          <h2>while (alive) &#123;</h2>
          <h2>practiceAlgos()</h2>
          <h2>doWork()</h2>
          <h2>getBetter()</h2>
          <h2>&#125;</h2>
          <div className='monogram'></div>
        </div>
      </div>
      <About/>
      <Stack/>
      <Projects/>
      <Contact/>
    </div>
    )
  }
}

export default Home;