import { createContext, useContext, useState } from "react";

const themes = {
    light: {
        foreground: "#333333",
        background: "#BAE2FF"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
}

const ThemeContext = createContext(
    // default theme if components try to use the theme context without being wrapped in a provider (contingency only) 
    { theme: themes.light }
)

function ThemeProvider({ children }) {

    const [theme, setTheme] = useState(themes.dark)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

function useThemeContext() {
    return (useContext(ThemeContext))
}

export { ThemeProvider, useThemeContext }