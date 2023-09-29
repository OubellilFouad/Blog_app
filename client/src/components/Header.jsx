import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='flex justify-between mb-12 items-center mt-5'>
      <Link to={'/app'} className=' text-inherit font-bold text-3xl' href="">My Blog</Link>
      <nav className='flex gap-4'>
        <Link to={'/login'} className=' text-inherit text-lg font-semibold' href="">Login</Link>
        <Link to={'/'} className=' text-inherit text-lg font-semibold' href="">Register</Link>
      </nav>
    </header>
  )
}

export default Header
