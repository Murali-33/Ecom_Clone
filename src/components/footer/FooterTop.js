import React from 'react';
import { Link } from "react-router-dom";

function FooterTop() {
  return (
    <div className='w-full bg-white py-6'>
     <div className='w-full border-t-[1px] border-b-[1px] py-8'>
      <div className='w-64 mx-auto text-center flex flex-col gap-1'>
        <p className='text-sm'>See personalized recommendations</p>
        <Link to='/signin'>
        <button className='w-full bg-yellow-400 py-1 rounded-md cursor-pointer font-semibold hover:bg-yellow-500 active:bg-yellow-700'>Sign in</button>
        </Link> 
        <p className='text-xs mt-1'>New customer?{" "}
        <Link to='/register'>
        <span className='text-blue-600 m1-1 cursor-pointer'>Start here.</span>
        </Link>
        </p>
      </div>
     </div>
    </div>
  )
}

export default FooterTop
