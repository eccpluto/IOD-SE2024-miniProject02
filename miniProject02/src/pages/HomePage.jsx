import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";

/**
 * 
 * @returns HomePage component.
 */
function HomePage() {

    return (
        <div className="HomePage">
            <CssBaseline/>
            <Container>
                <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }}>
                    <h1>Home</h1>
                </Box>
            </Container>
        </div>
    )
}

export default HomePage;