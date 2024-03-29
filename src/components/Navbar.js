import React from "react"
import ReactLogo from "../images/Bajaa/logo.png"
import './Navbar.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import MyCV from "./MyCV"


  export default function Navbar (props) {
    function collapseBar(){
      const navbarLinks = document.getElementsByClassName('navbar-links')[0]
      navbarLinks.
      classList.toggle('active')
    }
    return (
        <header className={props.darkMode ? "nav dark-nav" : "nav"}>
          {/* <navbar className="my-nav">
            <ul className="nav-list">
              <li className="nav-item">My CV</li>
              <li className="nav-item">About Developer</li>
              <li className="nav-item">Contact Me</li>
            </ul>
          </navbar> */}
            <div className="title-block">
              <img className="react-logo" src = {ReactLogo} alt="react-logo"/>
              <h1 className={props.darkMode ? "project-name dark-h1" : "project-name"}> Work & Experience </h1>
            </div>
            <a onClick={collapseBar} className="toggle-button">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </a>
            {/* <h3 className="project-description">Mohammad Hussain Bajaa</h3> */}
            <div className="navbar-links">            
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/components/MyCV">
                    My CV
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/components/ContactMe">
                    Contact Me
                  </Link>
                </li>
                <li className="nav-item">
                  <div className="dark-light-button" >
                    <input type="checkbox" id="darkmode-toggle"/>
                    <label id="darkmode-toggle-label" htmlFor="darkmode-toggle" onClick={props.toggleDarkMode}/>    
                  </div>
                </li>
              </ul>
            </div>
        </header>
    )
  }