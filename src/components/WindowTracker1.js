import React from "react";


export default function WindowTracker1() {
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    React.useEffect(() => {
        function watchWidth(){
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener("resize",watchWidth)
        return function(){
            //cleaning up...
            window.removeEventListener("resize",watchWidth)
        }
    }
    , [windowWidth])
    return (
        <h1 className="big-text">Window width: {windowWidth}</h1>

    )
}