import React from 'react'
import blog1 from '../../../assets/blog1.jpg'
import blog2 from '../../../assets/blog2.jpg'
import blog3 from '../../../assets/blog3.jpg'
import Post from '../../../components/Post'

function Home() {
  return (
    <div className='flex flex-col gap-8'>
      <Post img={blog1}/>
      <Post img={blog2}/>
      <Post img={blog3}/>
    </div>
  )
}

export default Home
