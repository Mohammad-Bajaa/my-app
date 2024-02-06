import React from "react"
import './Airbnb.css'
import AirbnbCard from "./AirbnbCard"
import Logo from '../images/Airbnb/airbnb 1.png'
import Image1 from '../images/Airbnb/image 22.png'
import Image2 from '../images/Airbnb/image 23.png'
import Image3 from '../images/Airbnb/image 24.png'
import Image4 from '../images/Airbnb/image 25.png'
import Image5 from '../images/Airbnb/image 26.png'
import Image6 from '../images/Airbnb/image 27.png'
import Image7 from '../images/Airbnb/image 28.png'
import Image8 from '../images/Airbnb/image 29.png'
import Image9 from '../images/Airbnb/image 30.png'

  export default function Airbnb () {
    return (
        <div className="body-page">
            <nav className="navbar">
                <img className="logo" src={Logo}/>
            </nav>
            <div className="image-container">
                <div className="images"> 
                    <img className="image1" src={Image7}/>
                    <img className="image2" src={Image9}/>
                    <img className="image3" src={Image5}/>
                    <img className="image4" src={Image6}/>
                    <img className="image5" src={Image8}/>
                    <img className="image6" src={Image1}/>
                    <img className="image7" src={Image2}/>
                    <img className="image8" src={Image4}/>
                    <img className="image9" src={Image3}/>
                </div>
            </div>
            <div className="about">
                <h1 className="title">Online Experiences</h1>
                <p className="description">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
            <div className="cards">
                <AirbnbCard 
                    image = "image12.png"
                    rate = "5.0"
                    quantity = {6}
                    country = "USA"
                    title = "Life lessons with Katie Zaferes"
                    price = {136}
                />
            </div>

        </div>
    )
  }
