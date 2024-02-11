import React from "react";

export default function Box(props){
    // const [on, setOn] = React.useState(props.on)
    const styles = {
        backgroundColor: props.on === true ? "#000000" : "#FFFFFF"
     }
    //  function handleClick(){
    //     setOn(prevState => !prevState)
    //  }
    return(
        <div className="box" onClick={props.toggle} style={styles}></div>
    )
}