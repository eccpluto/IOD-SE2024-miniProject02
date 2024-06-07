import './App.css'
import NavBar from './components/NavBar'
import AppRoutes from './routes/AppRoutes'
import { UserProvider } from './context/UserContext'

/**
 * 
 * @returns App component. This is the top level component.
 */
function App() {

  return (
    <>
      {/* TODO provide context(s) */}
      <UserProvider>
        <NavBar />
        <AppRoutes>
          <p>Hello</p>
        </AppRoutes>
      </UserProvider>
    </>
  )
}

export default App
