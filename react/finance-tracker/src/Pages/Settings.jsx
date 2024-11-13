import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Settings() {
    // Using curly braces to directly access the values from ThemeContext because it holds everything.
    const { isDarkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div>
            <h1>Settings</h1>
            <button onClick = {toggleTheme} >
                Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    );
}