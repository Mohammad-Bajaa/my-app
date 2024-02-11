import React from "react"
import './TravelJournal.css'
import Logo from '../images/TravelJournal/earth.png'
import './TravelPost.js'
import Posts from '../data.js'
import TravelPost from "./TravelPost.js"
import TravelPosts from "../data-travel-journal.js"


  export default function TravelJournal () {
    const travelPosts = TravelPosts.map(_post=>{
        return(
            <TravelPost
                key = {_post.id}
                _post = {_post}
            />
        )
    })
    return (
        <div className="main-container">
            <nav className="navbar">
                <div className="nav-container">
                    <img className="logo" src= {Logo}/>
                    <div className="nav-content">
                        <span>my travel journal.</span>
                    </div>
                </div>
            </nav>
            <div className="body-container">
                <div className="posts">
                    {travelPosts}
                </div>
            </div>
        </div>
        
        
    )
  }
