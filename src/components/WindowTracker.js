import React from "react";
import "./WindowTracker.css"
import WindowTracker1 from "./WindowTracker1";


export default function WindowTracker() {
    const [show, setShow] = React.useState(true)
    function toggle(){
        setShow(prevShow => !prevShow)
    }
    return(
        <div className="window-container">
            <button
                className="my-button"
                onClick={toggle}>
                    Toggle WindowTracker</button>
                
            {show && <WindowTracker1/>}
        </div>
    )
}