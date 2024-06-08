import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";

/**
 * 
 * @returns HomePage component.
 */
function HomePage() {

    const themeContext = useThemeContext();

    return (
        <div className="HomePage">
            {/* <CssBaseline /> */}
            <Box sx={{ bgcolor: themeContext.theme.background, display: "flex"}}>
                <h1>Home contents</h1>
            </Box>
        </div>
    )
}

export default HomePage;