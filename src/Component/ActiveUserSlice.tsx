import React from 'react'
import VedioIcon from "../assets/Shape.png"

import threedot from "../assets/Icon.png"
function UserSlice() {
  return (
    <div className=' mx-auto w-11/12 h-16 m-auto flex items-center bg-[#F6F6F6] p-5 mt-2 transition-all rounded-md mt-5'>

      <div className='w-12 h-12 rounded-full overflow-hidden relative '>
          <img className='w-full h-full object-cover' src="https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>

        <div className='ml-4'>
          <div className='flex items-center'>
          <h2 className='font-bold '>Aryan Kesharwani</h2> <div className='bg-[#3BA55D] w-[8px] h-[8px] ml-3 rounded-full'></div>

          </div>
       
        <p className='md:text-sm text-[10px]'>Click here to the contact info...</p>
        </div>
        
        <div className='flex ml-auto gap-6 mr-3'>
        <img  src={VedioIcon} alt="" />
        
        <img  src={threedot} alt="" />
        

        </div>
       
        
    </div>
  )
}

export default UserSlice