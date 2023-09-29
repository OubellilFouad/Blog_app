import React from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'

function Content() {
  return (
    <main className='min-h-screen p-3 max-w-[900px] m-auto text-[#333]'>
      <Header/>
      <Outlet/>
    </main>
  )
}

export default Content
