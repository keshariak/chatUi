import React from 'react'
import threedot from "../assets/Icon.png"

function UserSlice() {
  return (
    <div className='w-[360px] h-16 m-auto flex items-center hover:bg-gray-200 p-2 mt-2 transition-all rounded-sm'>
      <div className='w-12 h-12 rounded-full bg-amber-700 overflow-hidden '>
      <img className='object-cover w-full h-full' src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />


      </div>
        <div className='ml-3'>
        <h2 className='font-bold '>Aryan Kesharwani</h2>
        <p className='text-sm '>last message

        </p>
        </div>
        <img className='flex ml-auto mr-2' src={threedot} alt="" />
      
       
        
    </div>
  )
}

export default UserSlice