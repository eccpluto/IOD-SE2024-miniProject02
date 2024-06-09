import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import { CssBaseline } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";
import Grid from "@mui/material/Grid"

/**
 * 
 * @returns HomePage component.
 */
function HomePage() {

    const themeContext = useThemeContext();

    return (
        <Container maxWidth={false}
            sx={{
                // bgcolor: themeContext.theme.background,
                bgcolor: "tomato",
                // display: "flex",
                // height: "100vh",
                width: 1,
                p: 0,
                m: 0
            }}
        >
            <Typography variant="h1">
                HomePage
            </Typography>
        </Container>
    )
}

export default HomePage;

// export default function HomePage() {
//     return (
//         <Container maxWidth={false} disableGutters sx={{bgcolor: "tomato", height: "100vh" }}>
//             <Typography>Hello World</Typography>
//         </Container>
//     )
// }

// export default function HomePage() { 
//     return ( 
//       <> 
//         <Container maxWidth="lg"> 
//           <h1  style={{ backgroundColor: '#cfe8fc'}}> 
//             Container Of maxWidth = lg  
//            </h1> 
//         </Container> 
//         <Container maxWidth="md"> 
//           <h1  style={{ backgroundColor: '#cfe8fc'}}> 
//             Container Of maxWidth = md  
//            </h1> 
//         </Container> 
//         <Container maxWidth="sm"> 
//           <h1  style={{ backgroundColor: '#cfe8fc'}}> 
//             Container Of maxWidth = sm 
//           </h1> 
//         </Container> 
//         <Container maxWidth="xs"> 
//           <h1  style={{ backgroundColor: '#cfe8fc'}}> 
//             Container Of maxWidth = xs  
//           </h1> 
//         </Container> 
//         <Container fixed> 
//           <h1  style={{ backgroundColor: '#cfe8fc'}}> 
//             Container with fixed prop 
//            </h1> 
//         </Container> 
//       </> 
//     ); 
//   }