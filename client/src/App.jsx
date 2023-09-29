import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Index from './screens/content'
import Auth from './screens/auth/Auth'
import Home from './screens/content/pages/Home'
import Login from './screens/auth/Login'
import Register from './screens/auth/Register'
import Header from './components/Header'
import Content from './Content'

function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Content/>}>
        <Route path='/' element={<Auth/>}>
          <Route path='/' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
        </Route>
        <Route path='/app' element={<Index/>}>
          <Route index element={<Home/>} />
        </Route> 
      </Route>
    )
  )
  return (
    <RouterProvider router={routes}/>
  )
}

export default App
