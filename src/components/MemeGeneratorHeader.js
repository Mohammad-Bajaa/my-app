import React from "react";
import Logo from '../images/MemeGenerator//Troll Face.png'


export default function(){
    return(
        <div>
            <div className="header">
                <img className="logo" src={Logo}/>
                <span className="logo-title">MemeGenerator</span>
                <span className="header-right-content">React Course - Project 3</span>
            </div>
        </div>
    )
}