import React from "react"
import './AirbnbCard.css'
import star from '../images/Airbnb/Star 1.png'
import status from '../images/Airbnb/Group 80.png'


 export default function AirbnbCard(props) {
    return (
      <div className="card">
        <img className="card-status" src={status}/>

        <img className="card-image" src={`/images/Airbnb/${props.image}`}/>
        <br></br>
        
        <img className="star" src={star}/>
        <span className="rate"> {props.rate} </span>
        <span className="quantity">({props.quantity})</span>
        <span className="country">• {props.country}</span>
        <p className="card-title">{props.title}</p>
        <div className="card-details">
            <span className="card-price">From ${props.price} / </span>
            <span className="card-price-type">person</span>
        </div>
      </div>
    );
  }
  
