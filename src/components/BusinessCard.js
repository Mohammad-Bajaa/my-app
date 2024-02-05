import React from "react"
import './BusinessCard.css'
import PersonalPicture from '../images/BusinessCard/photo.jpg'
import EmailButton from '../images/BusinessCard/email-button.png'
import LinkedInButton from '../images/BusinessCard/linkedin-button.png'
import FacebookIcon from '../images/BusinessCard/Facebook Icon.png'
import InstagramIcon from '../images/BusinessCard/Instagram Icon.png'
import GitHubIcon from '../images/BusinessCard/GitHub Icon.png'
import TwitterIcon from '../images/BusinessCard/Twitter Icon.png'

  export default function BusinessCard () {
    return (
        <div className="business-card">
            <img className="personal-pic" src= {PersonalPicture}/>
            <div className="content">
                <h2 className="person-name"> Mohammad Bajaa </h2>
                <h4 className="person-job"> Full Stack Developer</h4>
                <p className="person-description"> mohbaj2016@gmail.com </p>
                <div className="email-linkedin"> 
                    <img className="email-button" src= {EmailButton}/>
                    <img className="linkedin-button" src= {LinkedInButton}/>
                </div>
                <div className="person-information"> 
                    <div className="person-about">
                        <h1 className="paragraph-title"> About</h1>
                        <p className="paragraph">
                            I'm an ambitious Software Engineer who makes Desktop and Web Applications, studying a Master's degree in Web Sciences.
                        </p>
                    </div>
                    <div className="person-interests">
                        <h1 className="paragraph-title"> Interests</h1>
                        <p className="paragraph">
                            Coding, React, C#, SQL.
                        </p>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <img className="media-button" src= {TwitterIcon}/>
                <img className="media-button" src= {FacebookIcon}/>
                <img className="media-button" src= {InstagramIcon}/>
                <img className="github-button" src= {GitHubIcon}/>
            </div>
        </div>
    )
  }