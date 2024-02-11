import React from "react"
import './AirbnbCard.css'
import star from '../images/Airbnb/Star 1.png'
import status from '../images/Airbnb/Group 80.png'


 export default function AirbnbCard(props) {
  let badgeText
  if(props.post.openSpots === 0){
    badgeText = "SOLD OUT"
  } else if (props.post.location === "Online"){
    badgeText = "ONLINE"
  }
  return (
      <div className="card">
        {props.post.openSpots === 0 && <img className="card-status" src={status}/>}

        <img className="card-image" src={`/images/Airbnb/${props.post.coverImg}`}/>
        <br></br>
        
        <img className="star" src={star}/>
        <span className="rate"> {props.post.stats.rating} </span>
        <span className="quantity">({props.post.stats.reviewCount})</span>
        <span className="country">• {props.post.location}</span>
        <p className="card-title">{props.post.title}</p>
        <div className="card-details">
            <span className="card-price">From ${props.post.price} / </span>
            <span className="card-price-type">person</span>
        </div>
      </div>
    );
  }
  
