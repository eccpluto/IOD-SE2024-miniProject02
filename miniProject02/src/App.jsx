import './App.css'
import NavBar from './components/NavBar'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './context/UserContext'
import { ThemeProvider } from './context/ThemeContext'
// import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { Toolbar, createTheme } from '@mui/material'

/**
 * 
 * @returns App component. This is the top level component.
 */
function App() {

  // const myTheme = createTheme({
  //   palette: {
  //     primary: {
  //       main: 
  //     }
  //   }
  // });

  return (
    <>
      {/* builtin MUI ThemeProvider requires theme as a prop */}
      {/* <ThemeProvider theme={myTheme}>  */}
      <ThemeProvider>
        <UserProvider>
          <NavBar />
          {/* second Toolbar component so content not hidden behind NavBar 
          see https://mui.com/material-ui/react-app-bar/
          */}
          <Toolbar />
          <AppRoutes>Hello</AppRoutes>
        </UserProvider>
      </ThemeProvider >
    </>
  )
}

export default App
