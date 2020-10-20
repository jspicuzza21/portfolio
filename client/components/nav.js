import React from 'react'

const Nav = () =>{

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Joseph Spicuzza</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-link" href="#about">About</a>
      <a className="nav-link" href="#stack">Tech Stack</a>
      <a className="nav-link" href="#projects">Projects</a>
      <a className="nav-link" href="#contact">Contact</a>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Nav;