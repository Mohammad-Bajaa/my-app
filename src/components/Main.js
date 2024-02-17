import React from "react"
import './Main.css'
import Logo from "../images/Bajaa/logo.png"
  export default function Main (props) {
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
        <main className={props.darkMode ? "main-body dark-main": "main-body light-main"}>
            <h1 className="list-header">Products:</h1>
            <ul className="list-items">
              <li> Human Resources application for MAR ASSIA ASSOCIATION - Desktop Application <span>(deployed).</span></li>
              <li> Al-Bajaa for warehouses <span>(building phase).</span></li>
              {/* <li> <a className="main--link" href="https://www.google.com">Click Me Please</a></li> */}
              <li> Contact with Mohammad Bajaa: +963996454519</li>
              <li> Ali Agol</li>
              {/* <li> Ahmad Alsaleh: +963938531395</li> */}
            </ul>
            {windowWidth > 1100 ? <img className="inner-logo" src={Logo}/> : "" }
            {console.log(window.innerWidth)}
        </main>
    )
  }