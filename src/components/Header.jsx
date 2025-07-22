import React from "react";
import "../assets/Header.css";

const Header = ({toggleTheme, isDark}) => {
    return(
        <div className="headerSectionDiv">
                HEADER
                <button className="themeButton" onClick={toggleTheme}>{isDark? "Light" : "Dark"}</button>
        </div>
    )
}
export default Header  