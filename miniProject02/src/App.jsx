import './App.css'
import NavBar from './components/NavBar'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './context/UserContext'
import { ThemeProvider } from './context/ThemeContext'

/**
 * 
 * @returns App component. This is the top level component.
 */
function App() {

  return (
    <div className="App">
      {/* TODO provide context(s) */}
      <ThemeProvider>
        <UserProvider>
          <NavBar />
          <AppRoutes>
            <p>Hello</p>
          </AppRoutes>
        </UserProvider>
      </ThemeProvider>
    </div>
  )
}

export default App
