import React from 'react'
import Login from './Login'
import { Outlet } from 'react-router-dom'

function Auth() {
  return (
    <div className='pt-20'>
      <Outlet/>
    </div>
  )
}

export default Auth
