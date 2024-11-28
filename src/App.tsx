import { useState } from 'react'
import './index.css'
import MainInterface from './components/MainInterface/MainInterface.tsx'
import Login from './components/Login/Login.tsx'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  if (isAuthenticated) {
    return <MainInterface />
  }

  return <Login setIsAuthenticated={setIsAuthenticated} />
}

export default App
