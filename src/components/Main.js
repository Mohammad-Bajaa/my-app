import React from "react"
import './Main.css'
import Logo from "../images/Bajaa/logo.png"
  export default function Main (props) {
    return (
        <main className={props.darkMode ? "main-body dark-main": "main-body light-main"}>
            <h1 className="list-header">Products:</h1>
            <ul className="list-items">
              <li> Human Resources application for MAR ASSIA ASSOCIATION - Desktop Application <span>(deployed).</span></li>
              <li> Al-Bajaa for warehouses <span>(building phase).</span></li>
              {/* <li> <a className="main--link" href="https://www.google.com">Click Me Please</a></li> */}
              <li> Contact with us: +963996454519</li>
              {/* <li> Ahmad Alsaleh: +963938531395</li> */}
            </ul>
            <img className="inner-logo" src={Logo} />
        </main>
    )
  }