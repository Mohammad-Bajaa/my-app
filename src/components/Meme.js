import React from "react";
import memesData from "../memesData.js";

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "1",
        bottomText: "2",
        randomImage: "/images/MemesGenerator/ (1).png"}
        )
    const [allMemeImages,setAllMemeImages] = React.useState(memesData)
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        
        const update = setMeme(prevMeme => ({
            ...Meme,
            randomImage: memesArray[randomNumber].url
        }))
    }
    return(
        <main className="main-content">
            <div className="form">
                <input className="custom-input" placeholder="Top Text"></input>
                <input className="custom-input" placeholder="Bottom Text"></input>
                {/* <div className="position-changer">
                    <p>Right arrow: <i class="arrow right"></i></p>
                    <p>Left arrow: <i class="arrow left"></i></p>
                    <p>Up arrow: <i class="arrow up"></i></p>
                    <p>Down arrow: <i class="arrow down"></i></p>
                </div> */}
                <button onClick={getMemeImage} className="form-button" >Get a new meme image  🖼</button>
            </div>
            <div className="image-container">
                <img id="myimg" src={meme.randomImage}/> 
            </div>
        </main>
    )
}