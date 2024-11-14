import React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Pages/ThemeContext";
import { useContext } from "react";

export default function Footer() {
    const { isDarkMode } = useContext(ThemeContext);

    const footerStyles = {
        backgroundColor: isDarkMode ? "#171f26" : "#5F7F98",
        color: isDarkMode ? "#fff" : "#fff"
    };

    return (
        <div class="footer" style={footerStyles}>
            <Link to="/Dashboard">Home</Link>
            <Link to="/Dashboard">Contact us</Link>
        </div>
    );
}
