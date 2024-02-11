import React from "react";
import './MemeGenerator.css'
import MemeGeneratorHeader from "./MemeGeneratorHeader";
import Meme from "./Meme";

export default function(){
    return(
        <div>
            <MemeGeneratorHeader/>
            <Meme/>
        </div>
    )
}