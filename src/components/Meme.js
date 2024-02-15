import React from "react";
// import memesData from "../memesData.js";

export default function Meme(){
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "/images/MemesGenerator/ (1).png"}
        )

    
    const [allMemeImages,setAllMemeImages] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data))
    },[])
    
    function getMemeImage(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        
        const update = setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: memesArray[randomNumber].url
        }))
    }
    



    function handleChange(event){
        const {name, value, type, checked} = event.target  
        setMeme(prevData => {
            return {
            ...prevData,
            [name]: type==="checkbox" ? checked : value
            }
        })
    }
    return(
        <main className="main-content">
            <div className="form">
                <input type="text" onChange={handleChange} name="topText" value={meme.topText} className="custom-input" placeholder="Top Text"></input>
                <input type="text" onChange={handleChange} name="bottomText" value={meme.bottomText} className="custom-input" placeholder="Bottom Text"></input>
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
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}