import React from 'react'
import Input from '../../components/Input'

function Register() {
  return (
    <form className='max-w-[400px] m-auto flex flex-col gap-2 items-center px-4 py-8 rounded-lg'>
      <h1 className='text-2xl font-bold mb-2'>Register</h1>
      <Input type={'text'} placeholder={'User name'}/>
      <Input type={'password'} placeholder={'Password'}/>
      <button className='w-full bg-blue-500 text-white py-1 rounded-md'>Register</button>
    </form>
  )
}

export default Register
