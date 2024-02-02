import React from "react"
import ReactLogo from "../images/logo512.png"
  export default function Navbar () {
    return (
        <nav className='nav'>
            <img className="react-logo" src = {ReactLogo} alt="react-logo"/>
            <h1 className="project-name"> ReactFacts </h1>
            <h3 className="project-description">React Course - Project 1</h3>
        </nav>
    )
  }