import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

/**
 * 
 * @returns HomePage component.
 */
function HomePage() {

    return (
        <div className="HomePage">
            <Container>
                <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }}>
                    <h1>HomePage</h1>
                </Box>
            </Container>
        </div>
    )
}

export default HomePage;