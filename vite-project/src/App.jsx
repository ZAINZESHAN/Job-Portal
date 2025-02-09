import React from 'react'
import Navbar from './components/ui/shared/Navbar'
import { createBrowserRouter } from 'react-router-dom'
import Login from './components/ui/auth/Login'
import Signup from './components/ui/auth/Signup'

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/signup',
      element: <Signup />
    }
  ])
  return (
    <>
      <Navbar />
    </>
  )
}

export default App
