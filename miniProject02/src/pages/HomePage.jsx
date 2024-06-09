import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useGetData } from "../hooks/useGetData";
// import { CssBaseline } from "@mui/material";
import { useThemeContext } from "../context/ThemeContext";
import Grid from "@mui/material/Grid"

/**
 * 
 * @returns HomePage component.
 */
function HomePage() {

    const themeContext = useThemeContext();

    // homepage will display random stocks
    const financialDataGecko = useGetData("https://api.geckoterminal.com/api/v2/networks");
    const financialDataCoinCap = useGetData("https://api.coincap.io/v2/assets");
    const financialDataOpenER = useGetData("https://open.er-api.com/v6/latest/USD");

    function handleClick() {
        console.log(financialDataGecko);
        console.log(financialDataCoinCap);
        console.log(financialDataOpenER);
            // CoinCap data: ${financialDataCoinCap},
            // Open Exchange Rates data: ${financialDataOpenER}
            // `)
    }

    return (
        // wrap each page in a Container
        <Container maxWidth={false}
            sx={{
                // width: { sm: 5 },
                borderRadius: 4,
                bgcolor: themeContext.theme.background,
                // bgcolor: "tomato",
                // display: "flex",
                height: "100vh",
                width: 1,
            }}
        >
            {/* box's are mui divs, we want to vertically stack content in these */}
            <Box sx={{
                color: themeContext.theme.foreground,
                onclick: handleClick,
            }}>

                {/* page header */}
                <Typography variant="h1" >
                    Perspector
                </Typography>
                <Typography>
                    Overview
                </Typography>

            </Box>

            {/* Map some popular stocks */}
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