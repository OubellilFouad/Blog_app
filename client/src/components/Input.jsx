import React from 'react'

function Input({type,placeholder}) {
  return (
    <input className='w-full py-1 px-2 bg-white border-2 border-[#eee] focus:outline-blue-500 rounded-md' type={type} placeholder={placeholder} />
  )
}

export default Input
