import React from "react"
import './Footer.css'
  export default function Footer(props)
{ return (
  <footer className={props.darkMode ? "dark-footer" : "light-footer"}>
    © created By Mohammad Ali Hussain Bajaa, All rights reserved.
  </footer>
) 
}