import './App.css'
import NavBar from './components/NavBar'
import AppRoutes from './routes/AppRoutes'

/**
 * 
 * @returns App component. This is the top level component.
 */
function App() {

  return (
    <>
      {/* TODO provide context(s) */}
      <AppRoutes>
        <NavBar>
          <p>Hello</p>
        </NavBar>
      </AppRoutes>
    </>
  )
}

export default App
