import { useState, createContext } from "react";

const themeContext = createContext()

function ThemeProvider(props) {
    const [theme, setTheme] = useState("light")
    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
        console.log("theme : ", theme)
    }

    return (
        <themeContext.Provider value={{ theme, toggleTheme }} >
            {props.children}
        </themeContext.Provider>
    )
}

export { themeContext, ThemeProvider }