import React from 'react'


function Post({img}) {
  return (
    <div className='flex gap-5'>
      <div className='flex-[80%]'>
        <img className='w-full aspect-[3.5/2] object-cover' src={img} alt="Blog image" />
      </div>
      <div className='flex-[100%] gap-2 flex flex-col'>
        <h2 className='text-2xl font-bold'>Create the Perfect Title for Your New Blog Post</h2>
        <p className='text-[#888] text-xs flex gap-2 font-medium'>
          <a className='text-[#333]' href="">Oubellil Fouad</a>
          <span>2023-09-28 17:50</span>
        </p>
        <p className='text-justify'>Unlocking the Secrets of Adventure: Join us as we embark on thrilling journeys, share incredible stories, and discover the hidden gems of the world. Explore travel tips, outdoor escapades, and awe-inspiring destinations that will ignite your wanderlust. Adventure awaits around every corner – are you ready to dive in?</p>
      </div>
    </div>
  )
}

export default Post
