import React from "react";
import "../assets/Header.css";
import { Link } from "react-router-dom";
import DigitalClock from "./DigitalClock";

const Header = ({toggleTheme, isDark}) => {
    return(
        <div className="headerSectionDiv">
                HEADER
                <div className="headerRightSectionDiv">
                    <DigitalClock/>
                    <Link to = {"/about"}>
                        <button className="themeButton">About</button>
                    </Link>
                    <Link to = {"/contact"}>
                        <button className="themeButton">Contact</button>
                    </Link>
                    <button className="themeButton" onClick={toggleTheme}>{isDark? "Light" : "Dark"}</button>
                </div>
                
        </div>
    )
}
export default Header  