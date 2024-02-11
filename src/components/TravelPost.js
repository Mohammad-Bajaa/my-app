import React from "react";
import "./TravelPost.css"
import locationArrow from '../images/TravelJournal/map-arrow.png'
export default function TravelPost(props){
    return(
        <div className="travel-post-container">
            <img className="post-photo" src = {`/images/TravelJournal/${props._post.imageUrl}`} />
            <div className="post-content">
                <div className="location">
                    <img className="post-arrow" src = {locationArrow} />
                    <span className="country"> {props._post.location}</span>
                    <a className="map-href" href={props._post.googleMapsUrl}>View on google maps</a>
                </div>
                <h1 className="place">{props._post.title}</h1>
                <div className="dates">
                    <span className="post-date">{props._post.startDate}</span> - <span className="post-date">{props._post.endDate}</span>
                </div>
                <div className="description">
                {props._post.description}
                </div>
            </div>
        </div>
    )
}