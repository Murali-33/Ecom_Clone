import React from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



function SideNavContent({title,Text1,Text2,Text3}) {
  return (
    <div>
          <div className='py-3 border-b-[1px] borer-b-gray-300 '>
              <h3 className='text-lg mb-1 px-6 font-semibold font-titleFont'>{title}</h3>
              <ul className='text-sm font-bold text-amazon_light'>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>{Text1}{" "}
                <span><KeyboardArrowRightIcon/></span></li>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>{Text2}{" "}
                <span><KeyboardArrowRightIcon/></span></li>
                <li className='flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer'>{Text3}{" "}
                <span><KeyboardArrowRightIcon/></span></li>
              </ul>
          </div>
    </div>
  )
}

export default SideNavContent
